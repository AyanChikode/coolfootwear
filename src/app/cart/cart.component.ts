import { Component, OnInit } from '@angular/core';

@Component({
  selector:'app-cart',
  templateUrl:'./cart.component.html'
})
export class CartComponent implements OnInit{

  cartProducts:any = []
  total:number = 0

  ngOnInit(){

    let data = localStorage.getItem("cartProducts")

    if(data){
      this.cartProducts = JSON.parse(data)
    }

    this.getTotal()

  }

  removeItem(i:any){

    this.cartProducts.splice(i,1)

    localStorage.setItem( "cartProducts", JSON.stringify(this.cartProducts))
    this.getTotal()

  }

  add(i:any){

    this.cartProducts[i].qty = this.cartProducts[i].qty + 1

    localStorage.setItem("cartProducts",JSON.stringify(this.cartProducts))
    this.getTotal()
  }

  remove(i:any){

    if(this.cartProducts[i] .qty > 1){

      this.cartProducts[i].qty = this.cartProducts[i].qty - 1

      localStorage.setItem("cartProducts",JSON.stringify(this.cartProducts))
      this.getTotal()
    }
  }

  getTotal(){

    this.total = 0

    for(let i=0;i<this.cartProducts.length;i++){

      this.total = this.total + (this.cartProducts[i].price * this.cartProducts[i].qty)

    }

  }
checkout(){

if(this.cartProducts.length == 0){

alert("Cart is empty");

return;

}

alert("Order Placed Successfully");

localStorage.removeItem('cartProducts');

this.cartProducts = [];

this.total = 0;

}
}
