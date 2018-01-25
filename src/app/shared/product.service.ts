import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Product } from "./models/product.model";

@Injectable()
export class ProductService {

    reviews: any[];

    constructor(private http: HttpClient) { }

    get(): Observable<Product[]> {
        return this.http.get<Product[]>("https://exp-rest-api.herokuapp.com/api/products");
    }

    getById(id: string): Observable<any> {
        return this.http.get("https://exp-rest-api.herokuapp.com/api/products/" + id);
    }

    save(product: any): Observable<any> {
        return this.http.post("https://exp-rest-api.herokuapp.com/api/products", product);
    }

    delete(id: string): Observable<any> {
        return this.http.delete("https://exp-rest-api.herokuapp.com/api/products/" + id);
    }
}