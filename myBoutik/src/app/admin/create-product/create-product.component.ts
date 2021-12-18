import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { ProductModel } from "../../models/product-model";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  // img link
  selectedImage: any = null;

  // DB
  path = "pulls";

  // model
  product!: ProductModel;

  constructor(private Product: ProductsService) {
    this.Product.path = "pulls";
  }

  ngOnInit() {
    this.product = new ProductModel();
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.product.url = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      this.Product.file = this.selectedImage;
      this.product.imageName = this.selectedImage.name;
    }
    else {
      this.product.url = '/assets/img/image_placeholder.jpg';
      this.selectedImage = null;
    }
  }

  insert() {
    this.Product.path = this.path;
    this.Product.insertProductDetails(this.product)
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    console.log("product", this.product.title);

  }
}
