import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
    product : {
      id:number,
      name:string,
      description: string,
      brand: string,
      gender: string,
      category: string,
      size: number[],
      color: string[],
      price: number,
      discountPrice ?:number,
      is_in_inventory: boolean,
      items_left: number,
      imageURL:string,
      slug: string
   };
}
