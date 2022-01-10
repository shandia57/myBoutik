import { Component, OnInit } from '@angular/core';
import { ChaussuresServiceService } from "../../../../services/chaussures/chaussures-service.service";


@Component({
  selector: 'app-admin-chaussures',
  templateUrl: './admin-chaussures.component.html',
  styleUrls: ['./admin-chaussures.component.scss']
})
export class AdminChaussuresComponent implements OnInit {
  pathToNewProduct = "chaussures"

  // DB
  products!: any;
  routerAdmin = "admin/chaussures/";


  constructor(private Product: ChaussuresServiceService) {
    this.products = this.Product.getAllProducts();
  }

  ngOnInit(): void {
  }

}
