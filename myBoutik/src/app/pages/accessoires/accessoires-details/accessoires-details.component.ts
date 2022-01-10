import { Component, OnInit } from '@angular/core';
import { AccessoiresServiceService } from "../../../services/accessoires/accessoires-service.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accessoires-details',
  templateUrl: './accessoires-details.component.html',
  styleUrls: ['./accessoires-details.component.scss']
})
export class AccessoiresDetailsComponent implements OnInit {

  product?: any;

  constructor(private Product: AccessoiresServiceService, private route: ActivatedRoute) {
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
