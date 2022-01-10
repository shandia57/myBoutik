import { Component, OnInit } from '@angular/core';
import { AccessoiresServiceService } from "../../../../services/accessoires/accessoires-service.service";


@Component({
  selector: 'app-admin-accessoires',
  templateUrl: './admin-accessoires.component.html',
  styleUrls: ['./admin-accessoires.component.scss']
})
export class AdminAccessoiresComponent implements OnInit {

  pathToNewProduct = "accessoires"
  // DB
  products!: any;
  routerAdmin = "admin/accessoires/";


  constructor(private Product: AccessoiresServiceService) {
    this.products = this.Product.getAllProducts();
  }

  ngOnInit(): void {
  }

}
