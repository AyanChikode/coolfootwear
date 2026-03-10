import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  products:any = [];

  constructor(private api:ApiService){}

  ngOnInit(){

    this.api.getProducts().subscribe((data:any)=>{
      this.products = data;
    });

  }

}