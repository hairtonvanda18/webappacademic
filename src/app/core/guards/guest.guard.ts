import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { StorageService } from '../../shared/storage/storage.service';

export const GuestGuard: CanActivateFn = () => {
  const router = inject(Router);
  const storage = inject(StorageService);
  const userData = storage.getUserData();

  if (userData?.token) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
