import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";


@Component({
  selector: 'app-pontalons',
  templateUrl: './pontalons.component.html',
  styleUrls: ['./pontalons.component.scss']
})
export class PontalonsComponent implements OnInit {

  products!: any;
  routerAdmin = "pontalons/";

  constructor(private Product: ProductsService) {
    this.Product.path = "pontalons";
    this.products = this.Product.getAllProducts();
  }

  ngOnInit(): void {
  }

}
