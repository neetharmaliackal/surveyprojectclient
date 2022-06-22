import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API} from '../../../API/index'
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PersonalSurveyService {
  personalData:string='';
  constructor(private http: HttpClient) { }

  // getPersonalData(){
  //   const url=API.PERSONAL_SURVEY_API
  //   this.http.get<any>(url).subscribe(response => {
  //     this.personalData= response;
  // })
  // }

  getPersonalData(): Observable<any>{
    const url=API.PERSONAL_SURVEY_API
    return this.http.get(url)
      //.map((result: Response) => result.json())
      .pipe(map((response: any) => response));
   
  }
  private subject = new Subject<any>();

    sendRoot(message: string) {
        this.subject.next( message );
    }

    // clearRoot() {
    //     this.subject.next('');
    // }

    getRoot(): Observable<any> {
        return this.subject.asObservable();
    }

}
