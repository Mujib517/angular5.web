import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, HomeComponent, ProductListComponent, ProductComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }