import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "./shared/shared.module";
import { AppRouterModule } from "./shared/app-router.module";

import { AppComponent, HomeComponent, ProductListComponent, 
        ProductComponent, UsersComponent, HeaderComponent, FooterComponent, 
        AboutComponent, ContactComponent, ProductDetailComponent, SpecsComponent, 
        ReviewsComponent, NewProductComponent } from './app.barrel';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, SharedModule, AppRouterModule],
    declarations: [AppComponent, HomeComponent,
        ProductListComponent, ProductComponent, UsersComponent, HeaderComponent, FooterComponent, AboutComponent, ContactComponent, ProductDetailComponent, SpecsComponent, ReviewsComponent, NewProductComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }