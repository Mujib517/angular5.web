import { Component } from "@angular/core";
import * as moment from 'moment';
import { HttpClient } from "@angular/common/http";
import { ProductService } from "../shared/product.service";

@Component({
    selector: 'app-product-list',
    template: `
     <h1>Products</h1>
     <div class="col-md-7">
        <div *ngFor="let prd of products" class="well">
            <app-product [product]="prd"></app-product>
        </div>
    </div>
   
    
    `
})
export class ProductListComponent {
    products: any[];

    constructor(private http: HttpClient) {
        let svc = new ProductService(http);

        svc.get().subscribe(
            (res) => this.products = res["data"]
        );
    }
}

//Pipes:uppercase,lowercase,titlecase,currency,date,async,json