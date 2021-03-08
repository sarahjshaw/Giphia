import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, take } from "rxjs/operators";
import { FirebaseService } from "./firebase.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private firebaseService: FirebaseService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.firebaseService.user.pipe(
            take(1),
            exhaustMap(user => {
                if (!user) {
                    return next.handle(req);
                }
                const modifiedReq = req.clone({
                    params: req.params.append('auth', user.token)});
                    return next.handle(modifiedReq);
            }))
    }

}
