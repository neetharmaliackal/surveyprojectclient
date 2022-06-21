import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { JsonFormComponent } from './json-form.component';

@Injectable()
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openModal(title:string, message:string, yes:Function ,no:Function) {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
        title: title,
        message:message
    };
    dialogConfig.minWidth = 400;

    const dialogRef = this.dialog.open(JsonFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result){
        if(yes){
          yes();
        }
      }else{
        if(no){
          no();
        }
      }
        
    });
  }


}