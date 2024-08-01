import { Injectable, Injector} from "@angular/core";
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpClient,
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
//import { v4 as uuidv4 } from "uuid";

@Injectable()
export class FakeBackendHttpInterceptor implements HttpInterceptor {
  // default heroes json path
  private _heroesJsonPath = "../../assets/heroes.json";

  //constructor(private http: HttpClient) {}
  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //return this.handleRequests(req, next);
    return of(new HttpResponse({ status: 200, body: this._heroesJsonPath }));
  }

  /**
   * Handle request's and support with mock data.
  */
  handleRequests(req: HttpRequest<any>, next: HttpHandler): any {
    const { url, method } = req;

    if (url.endsWith("/heroes") && method === "GET") {
        console.log('control enters the fakeBackend.handleRequests function.');
      req = req.clone({
        url: this._heroesJsonPath,
      });
      return next.handle(req).pipe(delay(500));
    }    
    // if there is not any matches return default request.
    return next.handle(req);
  }
}

/**
 * Mock backend provider definition for app.module.ts provider.
 */
export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendHttpInterceptor,
  multi: true,
};