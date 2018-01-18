import { Component } from "@angular/core";
import { ConsoleLogger } from "../shared/console.logger";
// single line, multi line, separate file
// Data binding

@Component({
    selector: 'app-home',
    templateUrl: './home.html'
})
export class HomeComponent {

    constructor(logger: ConsoleLogger) {
        logger.warn("Component loading very slow");
    }
}
