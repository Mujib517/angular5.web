import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ProductService } from "./product.service";

@Injectable()
export class ProductResolver implements Resolve<any>{

    constructor(private svc: ProductService) { }

    resolve() {
        return this.svc.get();
    }

}