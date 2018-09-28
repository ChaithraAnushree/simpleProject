import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {

  companyDetails = {};
  constructor(private _myService:CompanyServiceService, private _router: Router) { }


  updateCompany(){

    console.log(this.companyDetails);
    this._myService.updateCompany(this.companyDetails).subscribe((data)=>{
      console.log(data);
      if(data){
        this._router.navigateByUrl('companyDetails');
      }
    })

  }

  ngOnInit() {

     this.companyDetails = this._myService.getFormData();
    console.log(this.companyDetails);

  }

}