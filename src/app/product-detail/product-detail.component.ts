import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-product-detail',
  template: `

  <mat-spinner *ngIf="loading"></mat-spinner>

  <div *ngIf="!loading">
      <h1>{{product.brand}} {{product.model}}</h1>
      <div>{{product.price | currency}}</div>
      <div>{{product.lastUpdated|time}}</div>
    <hr/>
      <div>
        <ul class="nav nav-tabs">
          <li routerLinkActive="active"><a routerLink="specs">Specs</a></li>
          <li routerLinkActive="active"><a routerLink="reviews">Reviews</a></li>
        </ul>
        <router-outlet></router-outlet>
      </div>
  </div>

  `
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  loading: boolean = false;

  constructor(private productSvc: ProductService, private route: ActivatedRoute) {
    this.product = new Product();
  }

  //ngDoCheck
  //ngDestroy
  //ngOnChanges
  //ngOnContentInit
  //ngAfterContentInit

  //life cycle hook
  ngOnInit() {
    this.loading = true;
    console.log("Getting data");
    let id = this.route.snapshot.params.id;

    this.productSvc.getById(id)
      .subscribe(
      (res) => {
        this.product = <Product>res;
        this.productSvc.reviews = res["reviews"];
        this.loading = false;
      },
      (err) => console.log(err)
      );
  }


}