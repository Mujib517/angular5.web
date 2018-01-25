import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';

@Injectable()
export class ProductInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var newReq = req.clone({ headers: req.headers.set("authorization", "abc-def-ghi") });
        return next.handle(newReq)
            .do(res => console.log("Interceptor Response", res))
            .catch(err => {
                console.log("In error response");
                err.referenceId = "abc123";
                return Observable.throw(err)
            });
    }

}