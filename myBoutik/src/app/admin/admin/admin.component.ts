import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  // DB
  path = "pulls";
  products!: any;


  constructor(private Product: ProductsService) {
    this.Product.path = "pulls";
    this.products = this.Product.getAllProducts();
  }

  ngOnInit() { }


}


