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
            <app-product [product]="prd"></app-product>
        </div>
    </div>
   
    
    `
})
export class ProductListComponent {
    products: any[];

    constructor(svc: ProductService, private activatedRoute: ActivatedRoute) {
        this.products = this.activatedRoute.snapshot.data.products.data;
        // let obs = svc.get();

        // obs.subscribe(
        //     (res) => this.products = res["data"],
        //     (err) => console.log(err),
        //     () => console.log("completed")
        // );
    }
}

//Pipes:uppercase,lowercase,titlecase,currency,date,async,json