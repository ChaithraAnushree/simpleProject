import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';


@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  companyList  = [];

  constructor(private _serviceFile:CompanyServiceService, private _router: Router) { }


  addCompany(){
    this._router.navigateByUrl('company');
  }

  updateCompany(company){
    console.log(company);
    this._serviceFile.setFormData(company);
    this._router.navigateByUrl('companyUpdate');
  }

  viewCompany(company){
    console.log(company);
    this._serviceFile.setFormData(company);
    this._router.navigateByUrl('companyView');  
  }

  deleteCompany(i,company){

    var id = company._id;

    this._serviceFile.deleteCompany(id).subscribe((data)=>{
      console.log(data);
      if(data.success){
          this.companyList.splice(i,1);
      }
    })


  }




  ngOnInit() {
    this._serviceFile.companyDetails().subscribe((data)=>{
      
      if(data && data.length > 0){
        console.log('data in component')
        console.log(data)
        this.companyList = data;
      }
      
    })
  }

}