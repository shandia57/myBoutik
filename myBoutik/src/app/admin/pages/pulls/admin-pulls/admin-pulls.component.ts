import { Component, OnInit } from '@angular/core';
import { PullServiceService } from "../../../../services/pulls/pull-service.service";

@Component({
  selector: 'app-admin-pulls',
  templateUrl: './admin-pulls.component.html',
  styleUrls: ['./admin-pulls.component.scss']
})
export class AdminPullsComponent implements OnInit {

  // DB
  products!: any;
  routerAdmin = "admin/pulls/";


  constructor(private Product: PullServiceService) {
    this.products = this.Product.getAllProducts();
  }

  ngOnInit(): void {
  }

}
