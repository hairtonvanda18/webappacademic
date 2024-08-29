import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { InputPasswordComponent } from '../../shared/components/input-password/input-password.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule,
    InputComponent,
    InputPasswordComponent
  ],
  providers: [
  ]
})
export class AuthModule { }
