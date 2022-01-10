import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";


@Component({
  selector: 'app-accessoires',
  templateUrl: './accessoires.component.html',
  styleUrls: ['./accessoires.component.scss']
})
export class AccessoiresComponent implements OnInit {
  products!: any;
  routerAdmin = "accessoires/";

  constructor(private Product: ProductsService) {
    this.Product.path = "accessoires";
    this.products = this.Product.getAllProducts()
  }

  ngOnInit(): void {
  }

}
