import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductResolver implements Resolve<any>{

    constructor(private http: HttpClient) {    }

    resolve() {
        //
        return this.http.get("https://exp-rest-api.herokuapp.com/api/products");
    }

}