import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  // img link
  imgSrc?: string;
  selectedImage: any = null;

  // DB
  path = "pulls";
  products!: any;


  // NgModel
  titleProduct: string = "";
  priceProduct: string = "";
  file?: any;

  constructor(private Product: ProductsService) {
    this.Product.path = "pulls";
    this.products = this.Product.getAllProducts();
  }

  ngOnInit() { }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      this.Product.file = this.selectedImage;
    }
    else {
      this.imgSrc = '/assets/img/image_placeholder.jpg';
      this.selectedImage = null;
    }
  }


  insert() {
    this.Product.title = this.titleProduct;
    this.Product.price = this.priceProduct;
    this.Product.path = this.path;
    this.Product.insertProductDetails()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
  }
}
