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
@NgModule({
  imports: [
    CommonModule ,
    ReactiveFormsModule,
    HttpClientModule,
    PersonalSurveyRoutingModule,
    MatCardModule,
    MatButtonModule,
    IonicModule
  ],
  declarations: [ 
      PersonalSurveyComponent,
       JsonFormComponent
    ],
    providers: [PersonalSurveyService],
   
})
export class PersonalSurveyModule {}