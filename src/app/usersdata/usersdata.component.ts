import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersdataService } from './usersdata.service';

// export type Root = userProperties[]

export interface userProperties {
  firstName: string
  middleName: string
  lastName: string
  radio: string
  address: string
  // approved: boolean,
  // rejected: boolean
}

@Component({
  selector: 'app-usersdata',
  templateUrl: './usersdata.component.html',
  styleUrls: ['./usersdata.component.css']
})
export class UsersdataComponent implements OnInit {
  public userForm: FormGroup = this.fb.group({});
  public UserData: userProperties[]=[];
  // UserData: any;
  displayedColumns: string[] = ['firstName', 'middleName', 'lastName', 'radio','address','approvereject'];
  // public UserData: any=[];
  // data: any;
  // public element=[];
  constructor(private fb: FormBuilder,private usersdataService: UsersdataService) { }

  ngOnInit(): void {

    this.usersdataService.getUsersData().
      subscribe((response) => {
        this.UserData = response;
        //this.userForm= this.toFormGroup(this.UserData);

        console.log("data from file",this.UserData);
        // this.getUsersData(this.UserData);
        // const dataSource = this.UserData;
      })

     

  }
  
  // delete(element:any)
  // {
  //   this.element.removeAt(element);

  // }


}

