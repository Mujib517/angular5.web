import { Component } from "@angular/core";

@Component({
    selector: 'app-product-list',
    template: `
     <h1>Products</h1>
     <div class="col-md-7">
        <div *ngFor="let product of products" class="well">
            <h3>{{product.brand | uppercase}}</h3>
            <div>{{product.model | lowercase}}</div>
            <div>{{product.price | currency}}</div>
            <div>{{product.lastUpdated | date:'MM-dd-yyyy hh:mm:ss a'}}</div>
        </div>
    </div>`
})
export class ProductListComponent {
    products: any[];

    constructor() {
        this.products = [
            { id: 1, brand: "Nokia", model: "N8", price: 100, inStock: true, lastUpdated: Date.now() },
            { id: 2, brand: "Samsung", model: "S8", price: 300, inStock: true, lastUpdated: Date.now() },
            { id: 3, brand: "Sony", model: "Xperia 8", price: 500, inStock: true, lastUpdated: Date.now() }];
        console.warn("constructor executed");
    }
}

//Pipes:uppercase,lowercase,titlecase,currency,date,async,json