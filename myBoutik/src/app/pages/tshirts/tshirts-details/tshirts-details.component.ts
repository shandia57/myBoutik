import { Component, OnInit } from '@angular/core';
import { TshirtsServiceService } from "../../../services/tshirts/tshirts-service.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tshirts-details',
  templateUrl: './tshirts-details.component.html',
  styleUrls: ['./tshirts-details.component.scss']
})
export class TshirtsDetailsComponent implements OnInit {
  product?: any;

  constructor(private Product: TshirtsServiceService, private route: ActivatedRoute) {
    const id = this.route.snapshot.params.id;
    this.Product.getProduct(id).subscribe((value: any) => {
      this.product = value;
    });
  }

  ngOnInit(): void {
  }


  addToCart() {
    if (this.product.size === undefined) {
      alert("Vous devez choisir une taille !")
    } else {
      this.Product.insertToCard(this.product);
      alert("Votre produit à été ajouté au pannier ! ");
    }

  }

}
