import { HttpClient, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { StorageService } from "../../shared/storage/storage.service";
import { NotificationService } from "../../shared/components/notification/notification.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  router = inject(Router);
  httpService = inject(HttpClient);
  storageService = inject(StorageService);
  notificationService = inject(NotificationService);

  isRefreshing = false;

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const request = req;

    return next.handle(request).pipe(
      catchError(error => {
        if (error.status === 401) {
          this.storageService.setRedirectUrl(this.router.url);
          this.storageService.cleanAll();
        }
        return throwError(error);
      })
    );
  }

}
