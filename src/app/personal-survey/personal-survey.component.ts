import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API} from '../../../API/index'
import { PersonalSurveyService } from './personal-survey.service';
import {FormGroup} from '@angular/forms';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
// import {JsonFormData} from '../json-form/json-form.component'
@Component({
  selector: 'app-personal-survey',
  templateUrl: './personal-survey.component.html',
  styleUrls: ['./personal-survey.component.css']
})
export class PersonalSurveyComponent implements OnInit {
  personalData:string='';
  public formData: any;
 
  constructor(
    private personalSurveyService:PersonalSurveyService,
   
    ) { }

    
  ngOnInit(): void {
 console.log("personal");
 
  }

}
