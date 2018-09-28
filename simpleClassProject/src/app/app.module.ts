import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { CompanyServiceService } from './company-service.service';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';
import { EmployComponent } from './employ/employ.component';
import { EmployDetailsComponent } from './employ-details/employ-details.component';
import { EmployUpdateComponent } from './employ-update/employ-update.component';
import { EmployServiceService } from './employ-service.service';
import { CompanyViewComponent } from './company-view/company-view.component';
import { EmployViewComponent } from './employ-view/employ-view.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    HomeComponent,
    CompanyDetailsComponent,
    CompanyUpdateComponent,
    EmployComponent,
    EmployDetailsComponent,
    EmployUpdateComponent,
    CompanyViewComponent,
    EmployViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [
    CompanyServiceService,
    EmployServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }