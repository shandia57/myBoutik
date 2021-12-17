import { Component, OnInit, Input } from '@angular/core';
// import { PullServiceService } from "../../services/";
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from "../../models/product-model";
import { Observable } from 'rxjs'

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  productSrc?: string;
  productTitle?: string;
  productPrice?: string;
  productValue?: string;
  productId?: string;
  // @Input() productSrc?: string;
  // @Input() productTitle?: string;
  // @Input() productPrice?: string;

  constructor(private Product: ProductsService, private route: ActivatedRoute) {
    console.log(this.route.snapshot.params.id);
    const id = this.route.snapshot.params.id;

    this.Product.path = "pulls";
    this.Product.getProduct(id).subscribe((value: any) => {
      this.productSrc = value.url;
      this.productTitle = value.title;
      this.productPrice = value.price;
      this.productValue = value.imageName;
      console.log(value)
    });
  }

  ngOnInit(): void {

  }

}
