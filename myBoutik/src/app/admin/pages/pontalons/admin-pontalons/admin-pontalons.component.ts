import { Component, OnInit } from '@angular/core';
import { PontalonsServiceService } from "../../../../services/pontalons/pontalons-service.service";


@Component({
  selector: 'app-admin-pontalons',
  templateUrl: './admin-pontalons.component.html',
  styleUrls: ['./admin-pontalons.component.scss']
})
export class AdminPontalonsComponent implements OnInit {
  pathToNewProduct = "pontalons";

  // DB
  products!: any;
  routerAdmin = "admin/pontalons/";


  constructor(private Product: PontalonsServiceService) {
    this.products = this.Product.getAllProducts();
  }


  ngOnInit(): void {
  }

}
