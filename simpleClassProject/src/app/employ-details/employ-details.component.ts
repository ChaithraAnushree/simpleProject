import { Component, OnInit } from '@angular/core';
import { EmployServiceService } from '../employ-service.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-employ-details',
  templateUrl: './employ-details.component.html',
  styleUrls: ['./employ-details.component.css']
})
export class EmployDetailsComponent implements OnInit {

  employList  = [];

  constructor(private _serviceFile:EmployServiceService, private _router: Router) { }


  addEmploy(){
    this._router.navigateByUrl('employ');
  }

  updateEmploy(employ){
    console.log(employ);
    this._serviceFile.setFormData(employ);
    this._router.navigateByUrl('employUpdate');
  }

  viewEmploy(){
    this._router.navigateByUrl('employView');  
  }

  deleteEmploy(i,employ){

    var id = employ._id;

    this._serviceFile.deleteEmploy(id).subscribe((data)=>{
      console.log(data);
      if(data.success){
          this.employList.splice(i,1);
      }
    })


  }




  ngOnInit() {
    this._serviceFile.employDetails().subscribe((data)=>{
      
      if(data && data.length > 0){
        console.log('data in component')
        console.log(data)
        this.employList = data;
      }
      
    })
  }

}
