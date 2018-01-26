import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";
import { ProductService } from "./product.service";
import { ConsoleLogger } from "./console.logger";
import { FileLogger } from "./file.logger";
import { ProductResolver } from './product.resolver';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ProductInterceptor } from "./product.interceptor";
import { ShowDirective } from "./show.directive";

@NgModule({
    declarations: [TimePipe, ShowDirective],
    providers: [ProductService,
        { provide: ConsoleLogger, useClass: FileLogger },
        { provide: HTTP_INTERCEPTORS, useClass: ProductInterceptor, multi: true },
        ProductResolver],
    exports: [TimePipe, ShowDirective]
})
export class SharedModule { }