import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployServiceService {

  constructor(private _http:Http) { }

  formData={};

  /**
   * 
   * This function is for saving the new employ
   */
  saveEmployInService(formData){
     return this._http.post('/employ/saveEmploy', formData).map(function (data) {
       console.log(data);
       let newData = data.json();
       if(newData.success){

        return newData.clientViewData;
       }
    });
  }

  /**
   * This is the function for fetching all the employ records
   */
  employDetails(){
    return this._http.get('/employ/employDetails').map(function (data) {
       console.log(data);
       let newData = data.json();
       console.log("this is service file ")
       console.log(newData)
       if(newData.success){

        return newData.employData;
       }
    });
  }

  /**
   * for deleting one employ
   */
  deleteEmploy(id){
    return this._http.post('/employ/deleteEmploy',{params:id}).map(function (data) {
       console.log(data);
       let newData = data.json();
       console.log("this is service file ")
       console.log(newData)
       if(newData.success){

        return newData.employData;
       }
    });
  }

  /**
   * for update one employ
   */
  updateEmploy(parameter){

    console.log('parameter in service')
    console.log(parameter)
    return this._http.post('/employ/updateEmploy',parameter).map(function (data) {
      
      var newData = data.json()
      if(newData.success){
          return newData;
       }
    });
  };

  viewEmploy(){

    return this._http.post('/employ/viewEmploy',0).map(function (data) {
      
      var newData = data.json()
      if(newData.success){
          return newData;
       }
    });
  };


  setFormData(parameter){
    console.log(parameter);
    this.formData = parameter;
  }

  getFormData(){
    return this.formData;
  }

}
