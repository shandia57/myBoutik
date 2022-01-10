import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-chaussures',
  templateUrl: './chaussures.component.html',
  styleUrls: ['./chaussures.component.scss']
})
export class ChaussuresComponent implements OnInit {
  products!: any;
  routerAdmin = "chaussures/";

  constructor(private Product: ProductsService) {
    this.Product.path = "chaussures";
    this.products = this.Product.getAllProducts();
  }

  ngOnInit(): void {
  }

}
