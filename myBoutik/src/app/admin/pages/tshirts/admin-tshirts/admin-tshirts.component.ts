import { Component, OnInit } from '@angular/core';
import { TshirtsServiceService } from "../../../../services/tshirts/tshirts-service.service";


@Component({
  selector: 'app-admin-tshirts',
  templateUrl: './admin-tshirts.component.html',
  styleUrls: ['./admin-tshirts.component.scss']
})
export class AdminTshirtsComponent implements OnInit {

  pathToNewProduct = "tshirts";

  // DB
  products!: any;
  routerAdmin = "admin/tshirts/";


  constructor(private Product: TshirtsServiceService) {
    this.products = this.Product.getAllProducts();
  }

  ngOnInit(): void {
  }

}
