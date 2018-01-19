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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRouterModule } from "./shared/app-router.module";
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, SharedModule,AppRouterModule],
    declarations: [AppComponent, HomeComponent,
        ProductListComponent, ProductComponent, UsersComponent, HeaderComponent, FooterComponent, AboutComponent, ContactComponent, ProductDetailComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }