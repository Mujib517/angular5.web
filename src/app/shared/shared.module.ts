import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";
import { ProductService } from "./product.service";
import { ConsoleLogger } from "./console.logger";
import { FileLogger } from "./file.logger";
import { ProductResolver } from './product.resolver';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ProductInterceptor } from "./product.interceptor";

@NgModule({
    declarations: [TimePipe],
    providers: [ProductService,
        { provide: ConsoleLogger, useClass: FileLogger },
        { provide: HTTP_INTERCEPTORS, useClass: ProductInterceptor, multi: true },
        ProductResolver],
    exports: [TimePipe]
})
export class SharedModule { }