import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../apiservice.service';

@Component({
  selector:'app-product',
  templateUrl:'./product.component.html'
})
export class ProductComponent implements OnInit{

  id:any
  product:any

  qty:number = 1

  cartProducts:any = []

  constructor(private route:ActivatedRoute,
              private api:ApiService){}

  ngOnInit(){

    this.id = this.route.snapshot.paramMap.get('id')

    this.api.getProductById(this.id)
    .subscribe((res:any)=>{
      this.product = res
    })

    let data = localStorage.getItem("cartProducts")

    if(data){
      this.cartProducts = JSON.parse(data)
    }

  }

  add(){
    this.qty = this.qty + 1
  }

  remove(){
    if(this.qty>1){
      this.qty = this.qty - 1
    }
  }

  addToCart(){

    let found = false

    for(let i=0;i<this.cartProducts.length;i++){

      if(this.cartProducts[i].id == this.product.id){

        this.cartProducts[i].qty =
        this.cartProducts[i].qty + this.qty

        found = true
      }

    }

    if(!found){

      let item = {

        id:this.product.id,
        title:this.product.title,
        price:this.product.price,
        image:this.product.image,
        qty:this.qty

      }

      this.cartProducts.push(item)

    }

    localStorage.setItem(
      "cartProducts",
      JSON.stringify(this.cartProducts)
    )

    alert("Product added to cart")

  }

}