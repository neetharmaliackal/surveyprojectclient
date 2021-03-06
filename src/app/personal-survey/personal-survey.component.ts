import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../../../API/index'
import { PersonalSurveyService } from './personal-survey.service';
import { FormGroup } from '@angular/forms';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { UsersdataService } from '../usersdata/usersdata.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import {JsonFormData} from '../json-form/json-form.component'
export interface card {
  title: string
  
  // approved: boolean,
  // rejected: boolean
}
@Component({
  selector: 'app-personal-survey',
  templateUrl: './personal-survey.component.html',
  styleUrls: ['./personal-survey.component.css']
})
export class PersonalSurveyComponent implements OnInit {
  personalData: string = '';
  public formData: any;
  dataSource: any;

  msgOnButtonClickApproved: string | undefined;
  msgOnButtonClickRejected: string | undefined;
  // public approved: string | undefined;
  // public rejected: string | undefined;
  
  public cards:card[] =[];
  constructor(
    private personalSurveyService: PersonalSurveyService,
    private usersdataService: UsersdataService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.cards = [
      {
      title: "Personal Survey"
    },
    {
      title: "Extra Curricular Activity Survey"
    }
    ]

  }


  Approved(p: string | undefined) {
    this.msgOnButtonClickApproved = p;
  }
  Rejected(p: string | undefined) {
    this.msgOnButtonClickRejected = p;
  }

  ApprovedUsers() {
    this.router.navigate(['/usersdata'], {
      relativeTo: this.route,
      state: { status: 'approved' }

    })

  }
  RejectedUsers() {
    this.router.navigate(['/usersdata'], {
      relativeTo: this.route,
      state: { status: 'rejected' }

    })
  }
  setRoot(root:string) {
    if(root == 'Personal Survey'){
      root='personal-survey'
    }
    else if(root == 'Extra Curricular Activity Survey'){
      root='extra-survey'
    }
this.personalSurveyService.sendRoot(root);
  }

 

}
