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



  // productImage = "../../../assets/images/home/image_desktop_1.jpg";
  // productTitle = "New veste";
  // productPrice = 50;

  constructor() { }

  ngOnInit(): void {
  }

}
