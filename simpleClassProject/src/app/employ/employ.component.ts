import { Component, OnInit } from '@angular/core';
import { EmployServiceService } from '../employ-service.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {

  formData={};

  constructor(private _employService:EmployServiceService, private _router: Router) { }

  saveEmploy(){
    console.log(this.formData);
    this._employService.saveEmployInService(this.formData).subscribe((data)=>{

      console.log(data);
      if(data){
        this._router.navigateByUrl('employDetails');
      }
    })
  }

  ngOnInit() {
  }

}
