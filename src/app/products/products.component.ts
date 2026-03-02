import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    this.http.get('https://fakestoreapi.com/products').subscribe((data) => {
        this.products = data;
      });
  }
}
