import { Component, OnInit } from '@angular/core';
import { PontalonsServiceService } from "../../../services/pontalons/pontalons-service.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pontalons-details',
  templateUrl: './pontalons-details.component.html',
  styleUrls: ['./pontalons-details.component.scss']
})
export class PontalonsDetailsComponent implements OnInit {

  product?: any;

  constructor(private Product: PontalonsServiceService, private route: ActivatedRoute) {
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
