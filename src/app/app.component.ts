import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `   
    <h1>Products</h1>

    <div *ngFor="let product of products">
        <h3>{{product.brand}}</h3>
        <div>{{product.model}}</div>
        <div>{{product.price}}</div>
        <hr/>
    </div>

    
    `
})
export class AppComponent {
    products: any[];

    constructor() {
        this.products = [
            { id: 1, brand: "Nokia", model: "N8", price: 100, inStock: true },
            { id: 2, brand: "Samsung", model: "S8", price: 300, inStock: true },
            { id: 3, brand: "Sony", model: "Xperia 8", price: 500, inStock: true }];
        console.warn("constructor executed");
    }
}


//ngIf,ngSwitch, ngFor, ngModel, ngClass and ngStyle
// attribute directives and structural directives