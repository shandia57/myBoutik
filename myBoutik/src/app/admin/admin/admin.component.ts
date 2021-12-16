import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // img link
  imgSrc?: string;
  selectedImage: any = null;

  // Path for DB
  path = "pulls";


  // NgModel
  titleProduct: string = "";
  priceProduct: string = "";
  file?: any;

  constructor(private Product: ProductsService) {
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


