import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-vestes',
  templateUrl: './vestes.component.html',
  styleUrls: ['./vestes.component.scss']
})
export class VestesComponent implements OnInit {

  products!: any;
  routerAdmin = "vestes/";

  constructor(private Product: ProductsService) {
    this.Product.path = "vestes";
    this.products = this.Product.getAllProducts();
  }

  ngOnInit(): void {
  }

}
