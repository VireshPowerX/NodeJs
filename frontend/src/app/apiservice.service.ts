import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  apiUrl = 'http://localhost:3000/product';

  getAllData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }

    createData(data:any):Observable<any>
    {
      console.log(data,'createapi=>');
      return this._http.post(`${this.apiUrl}`,data);
    }

    deleteData(ProductId:any):Observable<any>
    {
      let pid = ProductId;
      return this._http.delete(`${this.apiUrl}/${pid}}`);
    }

    updateData(data:any,ProductId:any):Observable<any>
    {
      let pid = ProductId;
      return this._http.put(`${this.apiUrl}/${pid}`,data);
    }

    getSingleData(ProductId:any):Observable<any>
    {
      let pid = ProductId;
      return this._http.get(`${this.apiUrl}/${pid}`);
    }
}
