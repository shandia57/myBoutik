import { Component, OnInit, Input } from '@angular/core';
import { PullServiceService } from "../../../services/pulls/pull-service.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pulls-details',
  templateUrl: './pulls-details.component.html',
  styleUrls: ['./pulls-details.component.scss']
})
export class PullsDetailsComponent implements OnInit {
  // @Input() productImage?: string;
  // @Input() productTitle?: string;
  // @Input() productPrice?: string;
  // @Input() routerAdmin?: string;

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
    this.Product.insertToCard(this.product);
    console.log("finished");
  }

}
