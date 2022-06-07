import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { PersonalSurveyRoutingModule } from './personal-survey/personalsurvey-Routing.module';



const routes: Routes = [
  { 
  path:'personal',
  loadChildren:()=>
  import("./personal-survey/personalsurvey.module").then(
    (m)=>m.PersonalSurveyModule)

  }
];

@NgModule({
  imports: [
     RouterModule.forRoot(routes)    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [PersonalSurveyComponent]
