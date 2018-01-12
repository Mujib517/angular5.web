import { Component } from "@angular/core";
import * as moment from 'moment';

@Component({
    selector: 'app-product-list',
    template: `

    time: {{"01-01-2017" | time}}
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

    constructor() {
        this.products = [
            { id: 1, brand: "Nokia", model: "N8", price: 100, inStock: true, lastUpdated: Date.now() },
            { id: 2, brand: "Samsung", model: "S8", price: 300, inStock: true, lastUpdated: Date.now() },
            { id: 3, brand: "Sony", model: "Xperia 8", price: 500, inStock: true, lastUpdated: Date.now() }];
    }
}

//Pipes:uppercase,lowercase,titlecase,currency,date,async,json