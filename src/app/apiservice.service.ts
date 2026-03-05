import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL:any = "https://fakestoreapi.com";

  constructor(private http:HttpClient) { }


  getProducts(url:String)
  {
    return this.http.get(this.baseURL + "/"+url);
  }
  getById(url:String, id:Number)
  {
    return this.http.get(this.baseURL+"/"+url+"/"+id);
  }




}
