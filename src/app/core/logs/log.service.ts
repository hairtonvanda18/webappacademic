import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  print = (message?: any, ...optionalParams: any[]) => {
    if (!environment.production) {
      console.log('%c' + message, "color: yellow; font-style: italic", optionalParams);
    }
  };

  error = (operation: string, error: HttpErrorResponse, message: string) => {
    if (!environment.production) {
      console.log(`%c${operation}(${error.status}): ${message}`, "color: red; font-style: italic", error);
    }
  };

}
