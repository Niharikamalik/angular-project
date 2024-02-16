import { Component, OnInit } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  standalone:true,
  imports:[
    SearchComponent,
    CommonModule,
    ProductListComponent],
})
export class ContainerComponent  {















  // name = "john";
  // addToCard:number=0;
  // product ={
  //   name: 'iPhone',
  //   price:99999,
  //   color:'Red',
  //   discount:20000,
  //   inStock : 5,
  //   pimage : "/assets/phone.png"
  // }

  // getSaveMoney(){
  //   return this.product.price -(this.product.price - this.product.discount);
  // }

  // incrementCount(){
  //   if(this.addToCard < this.product.inStock){
  //     this.addToCard++;
  //   }
  // }
  // decrementCount(){
  //   if(this.addToCard>0){
  //     this.addToCard--;
  //   }
  // }

  // constructor() { }

  // ngOnInit(): void {
  // }
  // onNameChange(event:any){
  //   // this.name = event.target.value;
  //   // console.log(event);
  // }
}
