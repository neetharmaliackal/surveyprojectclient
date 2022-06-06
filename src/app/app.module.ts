import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalSurveyComponent } from './personal-survey/personal-survey.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonFormComponent } from './json-form/json-form.component';
// import { MatCardModule } from '@angular/material';
import { IonicModule } from '@ionic/angular';
// import { Events, IonContent } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PersonalSurveyService } from './personal-survey/personal-survey.service';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    JsonFormComponent,
    // MatCardModule
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
     IonicModule,
     MatButtonModule,
     FormsModule,
  ],
 
  providers: [PersonalSurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
