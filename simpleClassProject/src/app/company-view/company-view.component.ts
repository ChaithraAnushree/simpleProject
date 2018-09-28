import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.css']
})
export class CompanyViewComponent implements OnInit {


  constructor(private _myService:CompanyServiceService, private _router: Router) { }

  

  ngOnInit() {

     
  }

}
