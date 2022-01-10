import { Component, OnInit } from '@angular/core';
import { VestesServiceService } from "../../../services/vestes/vestes-service.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-vestes-details',
  templateUrl: './vestes-details.component.html',
  styleUrls: ['./vestes-details.component.scss']
})
export class VestesDetailsComponent implements OnInit {


  product?: any;

  constructor(private Product: VestesServiceService, private route: ActivatedRoute) {
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
