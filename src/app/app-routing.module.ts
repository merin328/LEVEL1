import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PatientcareComponent } from './patientcare/patientcare.component';
import { Covid19Component } from './covid19/covid19.component';

import { SupportComponent } from './support/support.component';
import { TermsComponent } from './terms/terms.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FormComponent } from './form/form.component';
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"patientcare",component:PatientcareComponent},
  {path:"covid19",component:Covid19Component},
 
  {path:"support",component:SupportComponent},
  {path:"terms",component:TermsComponent},
  {path:"doctor",component:DoctorComponent},
  {path:"login",component: LoginComponent},
  {path:"register",component:RegisterComponent },
  {path:"reset-password",component:ResetPasswordComponent },
  {path:"form",component:FormComponent }

 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
