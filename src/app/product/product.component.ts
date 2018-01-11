import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-product',
    template: ` <h3>{{product.brand | uppercase}}</h3>
    <div>{{product.model | lowercase}}</div>
    <div>{{product.price | currency}}</div>
    <div>{{product.lastUpdated | date:'MM-dd-yyyy hh:mm:ss a'}}</div>`
})
export class ProductComponent {

    @Input()
    product: any;

    constructor() {
    }
}