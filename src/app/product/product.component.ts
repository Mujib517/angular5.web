import { Component, Input } from "@angular/core";
import * as moment from 'moment';

@Component({
    selector: 'app-product',
    template: ` <h3>{{product.brand | uppercase}}</h3>
    <div>{{product.model | lowercase}}</div>
    <div>{{product.price | currency}}</div>
    <div>{{product.lastUpdated | date:'MM-dd-yyyy hh:mm:ss a'}}</div>
    <div>{{getRelativeTime(product.lastUpdated)}}</div>
    `
})
export class ProductComponent {

    @Input()
    product: any;

    constructor() {
    }

    getRelativeTime(date): string {
        return moment(date).fromNow();
    }
}