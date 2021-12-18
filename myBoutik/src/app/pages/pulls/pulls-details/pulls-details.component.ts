import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pulls-details',
  templateUrl: './pulls-details.component.html',
  styleUrls: ['./pulls-details.component.scss']
})
export class PullsDetailsComponent implements OnInit {
  @Input() productImage?: string;
  @Input() productTitle?: string;
  @Input() productPrice?: string;
  @Input() routerAdmin?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
