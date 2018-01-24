import { Component } from "@angular/core";
import * as moment from 'moment';
import { HttpClient } from "@angular/common/http";
import { ProductService } from "../shared/product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-product-list',
    template: `

    <div>
     <h1>Products</h1>
     <a class="btn btn-primary" routerLink="/products/new">Add New Product</a>
    </div>
    
     <div class="col-md-7">
        <div *ngFor="let prd of products" class="well">
            <app-product [product]="prd" (notify)="onNotify($event)"></app-product>
        </div>
    </div>
   
    
    `
})
export class ProductListComponent {
    products: any[];

    constructor(private svc: ProductService, private activatedRoute: ActivatedRoute) {
        this.products = this.activatedRoute.snapshot.data.products.data;
    }

    refresh() {
        let obs = this.svc.get();

        obs.subscribe(
            (res) => this.products = res["data"],
            (err) => console.log(err),
            () => console.log("completed")
        );
    }

    onNotify(data) {
        console.log(data);
        this.refresh();
    }
}

//Pipes:uppercase,lowercase,titlecase,currency,date,async,json