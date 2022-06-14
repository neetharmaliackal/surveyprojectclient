import { Component, OnInit } from '@angular/core';
import { UsersdataService } from './usersdata.service';
export type Root = userProperties[]

export interface userProperties {
  firstName: string
  middleName: string
  lastName: string
  radio: string
  address: string
}

@Component({
  selector: 'app-usersdata',
  templateUrl: './usersdata.component.html',
  styleUrls: ['./usersdata.component.css']
})
export class UsersdataComponent implements OnInit {
  UserData: any;
  displayedColumns: string[] = ['firstName', 'middleName', 'lastName', 'radio','address'];
  constructor(private usersdataService: UsersdataService) { }

  ngOnInit(): void {

    this.usersdataService.getUsersData().
      subscribe((response) => {
        this.UserData = response;
        console.log(this.UserData);
        // this.getUsersData(this.UserData);
        const dataSource = this.UserData;
      })

     

  }
  // getUsersData(UserData: userProperties) {
  //   const User = this.UserData;
  // }


}

