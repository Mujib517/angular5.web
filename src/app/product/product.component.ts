import { Component, Input } from "@angular/core";
import * as moment from 'moment';
import { ConsoleLogger } from "../shared/console.logger";

@Component({
    selector: 'app-product',
    template: ` <h3><a routerLink="/products/{{product._id}}">{{product.brand | uppercase}} {{product.model | lowercase}}</a></h3>
    <div>{{product.price | currency}}</div>
    <div>{{product.lastUpdated | date:'MM-dd-yyyy hh:mm:ss a'}}</div>
    <div>{{product.lastUpdated | time}}</div>
    `
})
export class ProductComponent {

    @Input()
    product: any;

    constructor(logger: ConsoleLogger) {
        //logger.error("Component took a long time to load");
    }
}