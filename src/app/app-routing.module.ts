import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { AuthComponent } from './layouts/auth/auth.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '', loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)
      }
    ]
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '', redirectTo: 'releases', pathMatch: 'full'
      },
      {
        path: 'releases', loadChildren: () => import("./modules/release/release.module").then(m => m.ReleaseModule)
      },
      {
        path: 'create-release', loadChildren: () => import("./modules/create-release/create-release.module").then(m => m.CreateReleaseModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
