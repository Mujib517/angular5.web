import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Product } from "./models/product.model";
import { environment } from "../../environments/environment";

@Injectable()
export class ProductService {

    reviews: any[];
    url: string = environment.url;

    constructor(private http: HttpClient) { }

    get(): Observable<Product[]> {
        return this.http.get<Product[]>(this.url);
    }

    getById(id: string): Observable<any> {
        return this.http.get(this.url + id);
    }

    save(product: any): Observable<any> {
        return this.http.post(this.url, product);
    }

    delete(id: string): Observable<any> {
        return this.http.delete(this.url + id);
    }
}