import { Component } from '@angular/core';
import { products, ProductsData } from './products.model';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-product',
  imports: [MatChipsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent {
  products = products;
  chips = ProductsData.chipOptions;


  inquire(product: any) {
    
  }

  navigateTo(products: any) {
    
  }


}
