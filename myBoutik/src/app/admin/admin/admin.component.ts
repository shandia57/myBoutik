import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PullServiceService } from "../../services/pulls/pull-service.service";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  // DB
  products!: any;

  constructor(private Product: PullServiceService) {
    this.products = this.Product.getAllProducts();
  }

  ngOnInit() { }


}


