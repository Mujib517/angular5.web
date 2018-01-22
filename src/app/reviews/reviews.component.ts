import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-reviews',
  template: `
    <h1 *ngIf="reviews && reviews.length>0">Reviews</h1>
    <h3 *ngIf="!reviews || reviews.length==0">Be the first one to review</h3>
    <div *ngFor="let review of reviews">
      <h4>{{review.name}}</h4>
      <h4>{{review.subject}}</h4>
      <div>{{review.message}}</div>
      <div>{{review.lastUpdated|time}}</div>
      <hr/>
    </div>
  `,
  styles: []
})
export class ReviewsComponent {
  reviews: any[];

  constructor(private productSvc: ProductService) {
    this.reviews = this.productSvc.reviews;
  }
}
