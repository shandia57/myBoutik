import { Component, OnInit } from '@angular/core';
import { ChaussuresServiceService } from "../../../services/chaussures/chaussures-service.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chaussures-details',
  templateUrl: './chaussures-details.component.html',
  styleUrls: ['./chaussures-details.component.scss']
})
export class ChaussuresDetailsComponent implements OnInit {

  product?: any;

  constructor(private Product: ChaussuresServiceService, private route: ActivatedRoute) {
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
