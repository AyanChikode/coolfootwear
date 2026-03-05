import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.api.getProducts('products').subscribe({
      next: (result: any) => {
        this.products = result;
      },
      error: (err) => {
        console.error('Error loading products', err);
      }
    });
  }
}