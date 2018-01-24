import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {

    reviews: any[];

    constructor(private http: HttpClient) { }

    get() {
        //async 
        return this.http.get("https://exp-rest-api.herokuapp.com/api/products");
    }

    getById(id: string) {
        return this.http.get("https://exp-rest-api.herokuapp.com/api/products/" + id);
    }

    save(product: any) {
        return this.http.post("https://exp-rest-api.herokuapp.com/api/products", product);
    }

    delete(id:string){
        return this.http.delete("https://exp-rest-api.herokuapp.com/api/products/" + id);
    }
}