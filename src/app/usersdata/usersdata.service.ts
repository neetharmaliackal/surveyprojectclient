import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API} from '../../../API/index'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
}
