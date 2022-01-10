import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";



@Component({
  selector: 'app-pulls',
  templateUrl: './pulls.component.html',
  styleUrls: ['./pulls.component.scss']
})
export class PullsComponent implements OnInit {


  products!: any;
  routerAdmin = "pulls/";


  constructor(private Product: ProductsService) {
    this.Product.path = "pulls";
    this.products = this.Product.getAllProducts();
  }

  ngOnInit(): void {
  }

}
