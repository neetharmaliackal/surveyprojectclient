import { Component, Input, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import { PersonalSurveyService } from '../personal-survey/personal-survey.service';
//import { JsonFormData, Surveycontroller } from "../models/personalsurveyModel"
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




// export interface JsonFormData {
//   controls: Surveycontroller[];
// }

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.css']
})
export class JsonFormComponent implements OnInit {
  // user:any = {};
  user:any = {};
  // @Input() jsonFormData: any;
  public myForm: FormGroup = this.fb.group({
   
    // firstName: ['', Validators.required],
    // middleName: ['', Validators.required],
    // lastName: ['', Validators.required],
    // radio: ['', Validators.required],
    // address: ['', [Validators.required, Validators.minLength(6)]],
 
  });
  public formData!: Surveycontroller[];
  isNextDisabled=true
  submitted = false;
  constructor(private fb: FormBuilder,
    private personalSurveyService: PersonalSurveyService,
    private jsonFormService: JsonFormService,
    public router: Router,
    // public dialogService:DialogService
  ) { }

  ngOnInit() {

    this.personalSurveyService.getPersonalData().
      subscribe((response) => {
        this.formData = response.surveycontrollers;
       this.myForm= this.toFormGroup(this.formData);
    
      })
  //     this.myForm.valueChanges.subscribe((v) => {
  //       this.isNextDisabled = !this.myForm.valid;
  //  });
     
    // this.myForm = this.fb.group({
    //   personalData: new FormArray([])
    // });
  
  }
 

  // openModal() {
  //   var data = null;//call api
  //   this.dialogService.openModal("Title1","Message Test", ()=>{
  //     //confirmed
  //     console.log('Yes');
  //   }, ()=>{
  //     //not confirmed
  //     console.log('No');
  //   });
  // }


  toFormGroup(questions: Surveycontroller[] ) {
  
    let group: any = {};

    questions.forEach(question => {
    
      group[question.formcontrolName] = question?.validators?.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
                                            //  console.log("question.formcontrolName",question.formcontrolName);
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
  // get f(): { [key: string]: AbstractControl } {
  //   return this.myForm.controls;
  // }

  // public hasErrors(formcontrolName: any): boolean {
  //   return this.myForm && this.myForm.get(formcontrolName).errors
  //   ?true:false;
  // }
  
  saveForm(){
    this.submitted = true;
// this.openModal();
    // stop here if form is invalid
    if (this.myForm.invalid) {
        return;
    }
    this.user=Object.assign(this.user, this.myForm.value);  
    alert("user data saved successfully");  
    // this.jsonFormService.mapper(this.user);
    console.log("this.user",this.user);
    this.jsonFormService.profileSave(this.user).subscribe(result => {
      // console.log("result",result);
    //   if(result){
    
    //   this.router.navigate(['/usersdata']);
    //  }
      
    })
    this.router.navigate(['/usersdata']); 
    // if(myForm.valid && myForm.Touched){
    
    // }
  }



}