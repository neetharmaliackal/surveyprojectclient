import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';

import { PersonalSurveyComponent } from './personal-survey/personal-survey.component';

const routes: Routes = [
  {  path: './personalSurvey',component: PersonalSurveyComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    // MatCardModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PersonalSurveyComponent]
