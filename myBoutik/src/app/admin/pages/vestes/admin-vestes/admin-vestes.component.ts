import { Component, OnInit } from '@angular/core';
import { VestesServiceService } from "../../../../services/vestes/vestes-service.service";


@Component({
  selector: 'app-admin-vestes',
  templateUrl: './admin-vestes.component.html',
  styleUrls: ['./admin-vestes.component.scss']
})
export class AdminVestesComponent implements OnInit {


  pathToNewProduct = "vestes";
  // DB
  products!: any;
  routerAdmin = "admin/vestes/";

  constructor(private Product: VestesServiceService) {
    this.products = this.Product.getAllProducts();
  }

  ngOnInit(): void { }

}
