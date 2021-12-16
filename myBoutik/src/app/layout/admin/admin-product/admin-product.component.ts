import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {

  @Input() productImage?: string;
  @Input() productTitle?: string;
  @Input() productPrice?: string;


  constructor() { }

  ngOnInit(): void {
  }

}
