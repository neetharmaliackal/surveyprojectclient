import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API} from '../../../API/index'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { peronslSurveyResponse} from "../models/personalsurveyModel"
@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  constructor(private http: HttpClient) { }

  getUsersData(): Observable<any>{
    const url=API.PERSONAL_SURVEY_GET_USER_DATA;
    return this.http.get(url)
      //.map((result: Response) => result.json())
      .pipe(map((response: any) => response));
      
   
  }

  ApproveUsersData(usersdata: peronslSurveyResponse): Observable<any>{ 
    const URL=API.PERSONAL_SURVEY_APPROVED_USERS;
    const body =usersdata;
    return this.http.put(URL, body);
  }

  RejectUsersData(usersdata: any): Observable<any>{ 
    const URL=API.PERSONAL_SURVEY_REJECTED_USERS;
    const body =usersdata;
    return this.http.put(URL, body);

  }
}
