import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { JsonFormComponent } from '../json-form/json-form.component';
import { UsersdataComponent } from '../usersdata/usersdata.component';

import { PersonalSurveyComponent } from './personal-survey.component'

const routes: Routes = [
  {  path: 'survey',component: PersonalSurveyComponent},
  {  path: 'jsonForm',component: JsonFormComponent},
  { path: 'usersdata', component: UsersdataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    // MatCardModule
  ],
  exports: [RouterModule]
})
export class PersonalSurveyRoutingModule { }
// export const routingComponents = [PersonalSurveyComponent]
