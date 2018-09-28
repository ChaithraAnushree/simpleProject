import { Component, OnInit } from '@angular/core';
import { EmployServiceService } from '../employ-service.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';


@Component({
  selector: 'app-employ-update',
  templateUrl: './employ-update.component.html',
  styleUrls: ['./employ-update.component.css']
})
export class EmployUpdateComponent implements OnInit {

  employDetails = {};
  constructor(private _myService:EmployServiceService, private _router: Router) { }


  updateEmploy(){

    console.log(this.employDetails);
    this._myService.updateEmploy(this.employDetails).subscribe((data)=>{
      console.log(data);
      if(data){
        this._router.navigateByUrl('employDetails');
      }
    })

  }

  ngOnInit() {

     this.employDetails = this._myService.getFormData();
    console.log(this.employDetails);

  }

}
