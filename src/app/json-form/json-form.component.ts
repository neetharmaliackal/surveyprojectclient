import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, } from '@angular/core';
import { PersonalSurveyService } from '../personal-survey/personal-survey.service';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, AbstractControl } from '@angular/forms';
import { JsonFormService } from './json-form.service';
import { Routes } from '@angular/router';
import { UsersdataComponent } from '../usersdata/usersdata.component';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DialogService } from './dialog.service';

const routes: Routes = [
  { path: 'usersdata', component: UsersdataComponent },
];

// export interface Root {
//   surveyid: number
//   surveytype: string
//   surveycontrollers: Surveycontroller[]
// }
// export interface Option {
//   key: string
//   value: string
// }
// export interface Surveycontroller {
//   id: string
//   text: string
//   type: string
//   value: string
//   flag: boolean
//   formcontrolName: string
//   validators: fvalidators
//   options?: Option[]
// }

// export interface fvalidators {
//   required: boolean
//   minLength: number
// }

export type Root = Root2[]

export interface Root2 {
  surveyid: number
  surveytype: string
  surveycontrollers: Surveycontroller[]
}

export interface Surveycontroller {
  id: string
  text: string
  type: string
  value: string
  flag: boolean
  formcontrolName: string
  validators: fValidators
  optional?: boolean
  options?: Option[]
}

export interface fValidators {
  required: boolean
  minLength: number
}

export interface Option {
  key: string
  value: string
}

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.css']
})
export class JsonFormComponent implements OnInit, OnDestroy {
  user: any = {};
  public myForm: FormGroup = this.fb.group({

  });
  public formData!: Surveycontroller[];
  isNextDisabled = true
  submitted = false;
  root: string | undefined;
  // DataForm: Surveycontroller[]=[];
  // subscription: any;
  //  root='';
  constructor(private fb: FormBuilder,
    private personalSurveyService: PersonalSurveyService,
    private jsonFormService: JsonFormService,
    public router: Router,
  ) { }

  ngOnInit() {
   
    this.personalSurveyService.survey.subscribe(rootsurvey => {
      if (rootsurvey) {
        this.root= rootsurvey;
      }
      

    });

    // this.root = "";
    // this.root = this.getRootSurvey();
    this.personalSurveyService.getPersonalData().
      subscribe((response: any[]) => {
        console.log("response", response, this.root);
        if (this.root) {
          response.forEach((el: Root2) => {
            if (el.surveytype === this.root) {
              this.formData = el.surveycontrollers;
              console.log("el.surveycontrollers", el.surveycontrollers)
            }
            // else if(this.root ==='extra-survey'){
            //   this.formData=response.filter((response: { surveytype: string; }) => response.surveytype == 'extra-survey');
            // }
          });

        }



        // this.formData = response;
        // this.formData = response.surveycontrollers;
        console.log(" this.formData", this.formData);
        this.myForm = this.toFormGroup(this.formData);

      })





  }

  getRootSurvey(): any {
    

  }






  toFormGroup(questions: Surveycontroller[]) {
    console.log("questions", questions)
    let group: any = {};

    questions.forEach(question => {

      group[question.formcontrolName] = question?.validators?.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    console.log("group", group);
    return new FormGroup(group);
  }

  isValid(question: any): boolean {
    if (this.myForm.controls[question.formcontrolName].valid) {
      return true;
    }
    else {
      return false;
    }
  }


  saveForm() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    this.user = Object.assign(this.user, this.myForm.value);
    alert("user data saved successfully");
    console.log("this.user", this.user);
    this.jsonFormService.profileSave(this.user).subscribe(result => {
    })
    this.router.navigate(['/usersdata']);
  }

  ngOnDestroy() {
    // this.personalSurveyService.clearRoot();
  }



}