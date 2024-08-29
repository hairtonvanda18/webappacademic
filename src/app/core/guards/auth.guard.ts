import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { StorageService } from '../../shared/storage/storage.service';

export const AuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const storage = inject(StorageService);
  const userData = storage.getUserData();

  if (userData?.token)
    return true;

  router.navigate(['/auth']);
  return false;
};
