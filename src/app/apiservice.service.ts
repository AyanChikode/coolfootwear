import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://fakestoreapi.com/";

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(this.url + "products");
  }

  getProductById(id:any){
    return this.http.get(this.url + "products/" + id);
  }

}