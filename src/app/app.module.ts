import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";
import { UsersComponent } from "./users/users.component";
import { ProductService } from "./shared/product.service";
import { SharedModule } from "./shared/shared.module";


@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, SharedModule],
    declarations: [AppComponent, HomeComponent,
        ProductListComponent, ProductComponent, UsersComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }