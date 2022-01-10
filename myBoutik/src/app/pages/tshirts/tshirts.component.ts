import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-tshirts',
  templateUrl: './tshirts.component.html',
  styleUrls: ['./tshirts.component.scss']
})
export class TshirtsComponent implements OnInit {

  products!: any;
  routerAdmin = "tshirts/";

  constructor(private Product: ProductsService) {
    this.Product.path = "tshirts";
    this.products = this.Product.getAllProducts();
  }

  ngOnInit(): void {
  }

}
