import { Component, OnInit } from '@angular/core';
import { PullServiceService } from "../../../services/pulls/pull-service.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pulls-details',
  templateUrl: './pulls-details.component.html',
  styleUrls: ['./pulls-details.component.scss']
})
export class PullsDetailsComponent implements OnInit {

  product?: any;

  constructor(private Product: PullServiceService, private route: ActivatedRoute) {
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
