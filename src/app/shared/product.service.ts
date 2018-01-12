import { HttpClient } from "@angular/common/http";

export class ProductService{
    
    constructor(private http:HttpClient){}
    
    get(){
       return this.http.get("https://exp-rest-api.herokuapp.com/api/products");
    }
}