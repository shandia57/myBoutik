import { Component, OnInit } from '@angular/core';
import { ProductsService } from "./../../services/products.service";


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  products!: any;

  constructor(private Product: ProductsService) {
    this.products = this.Product.getAllProductsFromCart();
    console.log(this.products)
  }

  ngOnInit(): void {
  }

  deleteProductToCart(data: any): void {
    let conf = confirm("Êtes-vous sûr de vouloir supprimer cet article de votre panier ?")
    if (conf) {
      this.Product.deleteProductFromCart(data.title);
      console.log("produit supprimer");
    }
  }

}
