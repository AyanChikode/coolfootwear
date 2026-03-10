import { Component, OnInit } from '@angular/core';

@Component({
selector:'app-checkout',
templateUrl:'./checkout.component.html'
})
export class CheckoutComponent implements OnInit{

cartProducts:any[] = [];
total:number = 0;

order:any={
country:'',
firstname:'',
lastname:'',
company:'',
address:'',
address2:'',
city:'',
state:'',
zip:'',
payment:''
}

ngOnInit(){

let data = localStorage.getItem('cartProducts');

if(data){
this.cartProducts = JSON.parse(data);
}

this.getTotal();

}

getTotal(){

this.total = 0;

for(let i=0;i<this.cartProducts.length;i++){

this.total =
this.total +
(this.cartProducts[i].price *
this.cartProducts[i].qty);

}

}

placeOrder(){

console.log("Order Details",this.order);

alert("Order Placed Successfully");

localStorage.removeItem("cartProducts");

}

}