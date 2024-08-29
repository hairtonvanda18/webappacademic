import { Injectable, inject } from '@angular/core';
import { STORAGE_KEYS, StorageKey } from './config';
import { LoginResponse } from '../../core/models/login-response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  router = inject(Router);

  getUserData  = () : LoginResponse | null => {
    const storedData = localStorage.getItem(STORAGE_KEYS[StorageKey.USER_DATA]);
    if (storedData) {
      const userData: LoginResponse = JSON.parse(storedData);
      return userData;
    }
    return null;
  };

  setUserData = (user: LoginResponse) => {
    localStorage.setItem(
      STORAGE_KEYS[StorageKey.USER_DATA],
      JSON.stringify(user)
    );
  };

  getAccessToken = () => {
    const data = this.getUserData();
    return data?.token;
  };

  getRedirectUrl = () => {
    return localStorage.getItem(STORAGE_KEYS[StorageKey.REDIRECT_URL]);
  };

  setRedirectUrl = (url: string) => {
    if (url === '') {
      localStorage.removeItem(STORAGE_KEYS[StorageKey.REDIRECT_URL]);
    }
    else
      localStorage.setItem(
        STORAGE_KEYS[StorageKey.REDIRECT_URL],
        url
      );
  };

  cleanAll = () => {
    localStorage.removeItem(STORAGE_KEYS[StorageKey.USER_DATA]);
    this.router.navigateByUrl('/auth');
  };
}
