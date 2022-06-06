import { Component, OnInit } from '@angular/core';
import {JsonFormData} from "../models/personalsurveyModel"
import { HttpClient } from '@angular/common/http';
import {API} from '../../../API/index'
import { PersonalSurveyService } from './personal-survey.service';
import {FormGroup} from '@angular/forms';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
@Component({
  selector: 'app-personal-survey',
  templateUrl: './personal-survey.component.html',
  styleUrls: ['./personal-survey.component.css']
})
export class PersonalSurveyComponent implements OnInit {
  personalData:string='';
  public formData: any;
  public personal=false;
 
  constructor(
    private personalSurveyService:PersonalSurveyService,
   
    ) { }
  ngOnInit(): void {
  // this.initialmethod();
  //  this.getpersonalsurveyform();
  }
//  initialmethod(){
//    this.personalSurveyForm=new FormGroup({});
//  }
  // getpersonalsurveyform(){
  //  this.personalSurveyService.getPersonalData().
  //  subscribe((response) => {
  //    this.personal=true;
  //    this.formData=response;
  //   // console.log(response);
  //  }
  //  )
  // }
}
