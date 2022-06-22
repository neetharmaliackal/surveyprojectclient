import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersdataService } from './usersdata.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { MatSort } from '@angular/material/sort';
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
  public state:any;
  // @Output() childButtonEvent = new EventEmitter();
  // @Output() childButtonEventRej= new EventEmitter();
//  private paginator:MatPaginator;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  // @ViewChild(MatPaginator) set MatPaginator(mp:MatPaginator){
  //   this.paginator = mp;
  // }
  
  dataSource: any;
  
  // dataSource: any;
 
  constructor(private fb: FormBuilder, private usersdataService: UsersdataService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
    
    ) { 

      this.state=this.router.getCurrentNavigation()?.extras.state;
    
    }
  user = {};
  ngOnInit(): void {
  
    this.usersdataService.getUsersData().
      subscribe((response) => {
        //this.UserData = response;
        let data;
        // console.log("data from file", this.UserData);
        if (this.state && this.state.status === "approved") {
          data = response.filter((data: { status: string; }) => data.status == "approved");
        }
       else if (this.state && this.state.status === "rejected") {
          data= response.filter((data: { status: string; }) => data.status == "rejected");
         
        }
        else{
          data=response;
        }
        this.dataSource= new MatTableDataSource<userProperties>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })

    //   this.usersdataService.getExtraUsersData().
    //   subscribe((response) => {
    //    this.dataSource=response;
    //  })


  }
  
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  applyFilter(filterValue: any) {
    const filters=filterValue.target.value;
    // filterValue = filterValue.trim(); // Remove whitespace
    // filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filters?.trim()?.toLowerCase();
  }

  Approve(element: any) {
    // let users= JSON.stringify(element);
    alert("User data approved successfully");

    this.usersdataService.ApproveorRejectUsersData(element.id, "approved").subscribe(data => {
     
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
        this.dataSource = data.filter((data: { status: string; }) => data.status == "approved");
        // this.childButtonEvent.emit(this.dataSource);
        // console.log("datasource",this.dataSource);
      })
     
   

  }
  RejectedUsers() {
    this.usersdataService.getUsersData().
      subscribe((data) => {
        this.dataSource= data.filter((data: { status: string; }) => data.status == "rejected");
        // this.childButtonEventRej.emit(this.dataSource);
        // console.log("datasourcerejected",this.dataSource);
      })

  }
  ViewAllUsers() {
    this.usersdataService.getUsersData().
      subscribe((data) => {
        this.dataSource= data;
      })
  }
  


}

