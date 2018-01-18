import { Injectable } from "@angular/core";

@Injectable()
export class FileLogger {
    
    log(msg) {
        console.log("File ", msg);
    }

    warn(msg) {
        console.warn("File", msg);
    }

    error(msg) {
        console.error("File", msg);
    }
}