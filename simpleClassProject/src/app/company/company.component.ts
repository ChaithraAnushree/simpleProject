import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {


  formData={};

  constructor(private _companyService:CompanyServiceService, private _router: Router) { }

  saveCompany(){
    console.log(this.formData);
    this._companyService.saveCompanyInService(this.formData).subscribe((data)=>{

      console.log(data);
      if(data){
        this._router.navigateByUrl('companyDetails');
      }
    })
  }




  ngOnInit() {
  }

}