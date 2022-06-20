import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersdataService } from './usersdata.service';
import { MatPaginator } from '@angular/material/paginator';

// export type Root = userProperties[]

export interface userProperties {
  firstName: string
  middleName: string
  lastName: string
  radio: string
  address: string
  status: string
  id: any
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
  public UserData:any= [];
  // UserData: any;
  displayedColumns: string[] = ['firstName', 'middleName', 'lastName', 'radio', 'address', 'approvereject', 'status'];
  // public UserData: any=[];
  // data: any;
  public status = "";
  public approvedUsersData: userProperties[] = [];
  public RejectedUsersData: userProperties[] = [];
  btnDisabled = false;
  submitted = false;
  public value = "";
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  // dataSource: any;
 
  constructor(private fb: FormBuilder, private usersdataService: UsersdataService) { }
  user = {};
  ngOnInit(): void {

    this.usersdataService.getUsersData().
      subscribe((response) => {
        this.UserData = response;
        console.log("data from file", this.UserData);
      })



  }
  
  // ngAfterViewInit() {
 
  // }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.UserData.filter = filterValue;
  }

  Approve(element: any) {
    // let users= JSON.stringify(element);
    alert("User data approved successfully");

    this.usersdataService.ApproveorRejectUsersData(element.id, "approved").subscribe(data => {
      // for(let i=0;i<data.length;i++){
      // if(element.id==data.id){
      //   this.btnDisabled = true;
      //  }

      // }


      //  if(data.status=="approve"){
      //   this.approvedUsersData=data;
      //   console.log("this.approvedUsersData",this.approvedUsersData);
      //  }
      //  else if(data && data.status=="reject"){
      //   this.RejectedUsersData=data;
      //  }
    })
  }

  Reject(element: any) {
    alert("User data rejected");
    this.usersdataService.ApproveorRejectUsersData(element.id, "rejected").subscribe(data => {

    })
  }

  ApprovedUsers() {
    this.usersdataService.getUsersData().
      subscribe((data) => {
        this.UserData = data.filter((data: { status: string; }) => data.status == "approved");
      })

  }
  RejectedUsers() {
    this.usersdataService.getUsersData().
      subscribe((data) => {
        this.UserData = data.filter((data: { status: string; }) => data.status == "rejected");
      })

  }
  ViewAllUsers() {
    this.usersdataService.getUsersData().
      subscribe((data) => {
        this.UserData = data;
      })
  }
  


}

