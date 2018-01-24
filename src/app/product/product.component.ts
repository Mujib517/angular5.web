import { Component, Input, EventEmitter, Output } from "@angular/core";
import * as moment from 'moment';
import { ConsoleLogger } from "../shared/console.logger";
import { ProductService } from "../shared/product.service";

@Component({
    selector: 'app-product',
    template: ` <h3><a routerLink="/products/{{product._id}}">{{product.brand | uppercase}} {{product.model | lowercase}}</a></h3>
    <div>{{product.price | currency}}</div>
    <div>{{product.lastUpdated | date:'MM-dd-yyyy hh:mm:ss a'}}</div>
    <div>{{product.lastUpdated | time}}</div>
    <div>
        <button class="btn btn-danger btn-sm" (click)="onRemove(product._id)">Remove</button>
    </div>
    `
})
export class ProductComponent {

    @Input()
    product: any;
    @Output()
    notify: EventEmitter<any>;

    constructor(private productSvc: ProductService) {
        this.notify = new EventEmitter();
    }

    onRemove(id: string) {
        this.productSvc.delete(id)
            .subscribe(
            (res) => this.notify.emit({msg:"this is a msg from child"}),
            (err) => console.log(err)
            )
    }
}