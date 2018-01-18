import { Injectable } from "@angular/core";

@Injectable()
export class ConsoleLogger {

    constructor(x:number){}

    log(msg) {
        console.log(msg);
    }

    warn(msg) {
        console.warn(msg);
    }

    error(msg) {
        console.error(msg);
    }
}