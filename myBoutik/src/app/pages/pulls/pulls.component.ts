import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { Observable } from 'rxjs';
import { map, toArray } from 'rxjs/operators';



@Component({
  selector: 'app-pulls',
  templateUrl: './pulls.component.html',
  styleUrls: ['./pulls.component.scss']
})
export class PullsComponent implements OnInit {
  productImage = "assets/images/home/image_desktop_1.jpg";
  productTitle = "Nouvelle veste";
  productPrice = "50";

  products!: any;
  fusion!: any;
  keys!: any;


  constructor(private Product: ProductsService) {
    this.Product.path = "pulls";
    this.products = this.Product.getAllProducts();
    // this.keys = this.Product.getAllKeys();

  }
  // 
  ngOnInit(): void {
  }

}
