import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatientcareComponent } from './patientcare/patientcare.component';
import { Covid19Component } from './covid19/covid19.component';
import { TermsComponent } from './terms/terms.component';
import { SupportComponent } from './support/support.component';
import { CustomStyleDirective } from './custom-style.directive';
import { DoctorComponent } from './doctor/doctor.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  
    AppComponent,
    HomeComponent,
    PatientcareComponent,
    Covid19Component,
    TermsComponent,
    SupportComponent,
    CustomStyleDirective,
    DoctorComponent,
    FooterComponent,
    UserComponent,
    HeaderComponent,
    LoginComponent,
    
    RegisterComponent,
    ResetPasswordComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
