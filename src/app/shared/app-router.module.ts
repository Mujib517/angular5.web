import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { ProductListComponent } from "../product-list/product-list.component";
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { ProductResolver } from "./product.resolver";

const ROUTES: Route[] =
    [

        { path: '', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'products', component: ProductListComponent,resolve:{products:ProductResolver} },
        { path: 'products/:id', component: ProductDetailComponent },
        { path: '**', component: HomeComponent }
    ];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRouterModule { } 
