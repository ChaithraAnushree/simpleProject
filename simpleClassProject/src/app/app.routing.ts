import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';



import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';
import { EmployComponent } from './employ/employ.component';
import { EmployDetailsComponent } from './employ-details/employ-details.component';
import { EmployUpdateComponent } from './employ-update/employ-update.component';
import { CompanyViewComponent } from './company-view/company-view.component';
import { EmployViewComponent } from './employ-view/employ-view.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'companyDetails', component: CompanyDetailsComponent },
  { path: 'companyUpdate', component: CompanyUpdateComponent },
  { path: 'companyView', component: CompanyViewComponent},
  { path: 'employ', component: EmployComponent },
  { path: 'employDetails', component: EmployDetailsComponent },
  { path: 'employUpdate', component: EmployUpdateComponent},
  { path: 'employView', component: EmployViewComponent}

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],  
  declarations: []
})



export class AppRoutingModule { }