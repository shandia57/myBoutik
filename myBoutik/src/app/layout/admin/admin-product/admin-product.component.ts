import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from "../../../services/products.service";

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {

  @Input() productImage?: string;
  @Input() productTitle?: string;
  @Input() productPrice?: string;
  @Input() productId?: string;



  constructor(private Product: ProductsService) { }

  ngOnInit(): void { }

  sendData() {
    console.log("coucou");
    console.log(this.productId);
  }

}
