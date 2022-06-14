import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {API} from '../../../API/index'
import {Surveycontroller, peronslSurveyResponse} from "../models/personalsurveyModel"

@Injectable({
  providedIn: 'root'
})

export class JsonFormService {
 user:any = {};
  constructor(
    private readonly http:HttpClient
  ) { }

  public profileSave(userdata:peronslSurveyResponse):Observable<any> {
    console.log("userdata",userdata);

    // const body = this.mapper(); 
    const body = userdata;
    const URL= API.PERSONAL_SURVEY_FORM_SUBMIT_API
  return this.http.post(URL, body);
  
  }
  
  // public mapper(user):peronslSurveyResponse{
  //   return {
  //    Firstname: this.firstName,
  //    Middlename: this.middleName,
  //    Lastname: this.lastName,
  //    Gender:this.gender,
  //    Address:this.address
  //   }
  // }


}


// function body(URL: string, body: any) {
//   throw new Error('Function not implemented.');
// }

