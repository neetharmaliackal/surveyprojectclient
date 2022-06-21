import { Component, Input, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import { PersonalSurveyService } from '../personal-survey/personal-survey.service';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, AbstractControl } from '@angular/forms';
import { JsonFormService } from './json-form.service';
import { Routes } from '@angular/router';
import { UsersdataComponent } from '../usersdata/usersdata.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from './dialog.service';

const routes: Routes = [
  { path: 'usersdata', component: UsersdataComponent },
];

export interface Root {
  surveyid: number
  surveytype: string
  surveycontrollers: Surveycontroller[]
}
export interface Option {
  key: string
  value: string
}
export interface Surveycontroller {
  id: string
  text: string
  type: string
  value: string
  flag: boolean
  formcontrolName: string
  validators: fvalidators
  options?: Option[]
}

export interface fvalidators {
  required: boolean
  minLength: number
}
@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.css']
})
export class JsonFormComponent implements OnInit {
  user:any = {};
  public myForm: FormGroup = this.fb.group({
 
  });
  public formData!: Surveycontroller[];
  isNextDisabled=true
  submitted = false;
  constructor(private fb: FormBuilder,
    private personalSurveyService: PersonalSurveyService,
    private jsonFormService: JsonFormService,
    public router: Router,
  ) { }

  ngOnInit() {

    this.personalSurveyService.getPersonalData().
      subscribe((response) => {
        this.formData = response.surveycontrollers;
       this.myForm= this.toFormGroup(this.formData);
    
      })

  
  }
 

 

  toFormGroup(questions: Surveycontroller[] ) {
  
    let group: any = {};

    questions.forEach(question => {
    
      group[question.formcontrolName] = question?.validators?.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    console.log(group);
    return new FormGroup(group);
  }

  isValid(question: any) : boolean{
    if(this.myForm.controls[question.formcontrolName].valid){
     return true;
     }
     else{
       return false;
     }
    }
  
  
  saveForm(){
    this.submitted = true;
    if (this.myForm.invalid) {
        return;
    }
    this.user=Object.assign(this.user, this.myForm.value);  
    alert("user data saved successfully");  
    console.log("this.user",this.user);
    this.jsonFormService.profileSave(this.user).subscribe(result => {   
    })
    this.router.navigate(['/usersdata']); 
  }



}