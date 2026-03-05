import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../apiservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId!: any;
  product: any;
  qty: number = 1;

  cartProducts: any[] = [];

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    // Route param get karo
    this.productId = this.route.snapshot.paramMap.get('id') || '';

    // Product fetch karo
    this.api.getById('products', this.productId)
      .subscribe((result: any) => {
        this.product = result;
      });

    // Cart load karo
    this.cartProducts = JSON.parse(localStorage.getItem('cartProducts') || '[]');
  }

  add(): void {
    this.qty++;
  }

  remove(): void {
    if (this.qty > 1) {
      this.qty--;
    }
  }

  addToCart(): void {

    const existingItem = this.cartProducts.find(
      item => item.id === this.product.id
    );

    if (existingItem) {
      existingItem.qty += this.qty;
    } else {
      const cartItem = {
        id: this.product.id,
        title: this.product.title,
        price: this.product.price,
        image: this.product.image,
        qty: this.qty
      };

      this.cartProducts.push(cartItem);
    }

    localStorage.setItem(
      'cartProducts',
      JSON.stringify(this.cartProducts)
    );

    // alert('Product added to cart');
  }
}