import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";
import { ProductService } from "./product.service";
import { ConsoleLogger } from "./console.logger";
import { FileLogger } from "./file.logger";
import { ProductResolver } from './product.resolver';

@NgModule({
    declarations: [TimePipe],
    providers: [ProductService, { provide: ConsoleLogger, useClass: FileLogger }, ProductResolver],
    exports: [TimePipe]
})
export class SharedModule { }