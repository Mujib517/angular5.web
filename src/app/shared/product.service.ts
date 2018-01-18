import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService{
    
    constructor(private http:HttpClient){}
    
    get(){
        //async 
       return this.http.get("https://exp-rest-api.herokuapp.com/api/products");
    }
}