import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pulls',
  templateUrl: './pulls.component.html',
  styleUrls: ['./pulls.component.scss']
})
export class PullsComponent implements OnInit {
  productImage = "assets/images/home/image_desktop_1.jpg";
  productTitle = "Nouvelle veste";
  productPrice = "50";
  constructor() { }

  ngOnInit(): void {
  }

}
