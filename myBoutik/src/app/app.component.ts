import { Component } from '@angular/core';
import { ProductsService } from "./services/products.service";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myBoutik';

  products!: any;
  size = 0;



  constructor(private Product: ProductsService) {
    this.Product.path = "cart";
    this.products = this.Product.getAllProductsFromCart();
    this.size = this.products.subscribe((result: any) => { this.size = result.length });


  }

}

