import { NgModule } from '@angular/core';
import { JsonFormComponent } from '../json-form/json-form.component';
import { PersonalSurveyComponent } from './personal-survey.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 import { PersonalSurveyRoutingModule } from './personalsurvey-Routing.module'
import { PersonalSurveyService } from './personal-survey.service';
import { IonicModule } from '@ionic/angular';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UsersdataComponent } from '../usersdata/usersdata.component';
import { UsersdataService } from '../usersdata/usersdata.service';
import { JsonFormService } from '../json-form/json-form.service';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  imports: [
    CommonModule ,
    ReactiveFormsModule,
    HttpClientModule,
    PersonalSurveyRoutingModule,
    MatCardModule,
    MatButtonModule,
    IonicModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule
    
  ],
  declarations: [ 
      PersonalSurveyComponent,
       JsonFormComponent,
       UsersdataComponent
    ],
    providers: [PersonalSurveyService,UsersdataService,JsonFormService],
   
})
export class PersonalSurveyModule {}

