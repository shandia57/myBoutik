import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input() productImage?: string;
  @Input() productTitle?: string;
  @Input() productPrice?: string;
  @Input() routerAdmin?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
