import { Component, OnInit, inject } from "@angular/core";
import { NotificationService } from "../../../../shared/components/notification/notification.service";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: `
    :host {
      width: 100%;
    }
  `
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({ });
  isLoading: boolean = false;

  router = inject(Router);
  notificationService = inject(NotificationService);

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    if (this.formLogin.value.userName == '' ||
      this.formLogin.value.password == '') {
      this.notificationService.warning("Obrigatório preencher todos os campos correctamente!");
      return;
    }

    if (this.formLogin.get('userName')?.invalid) {
      this.notificationService.warning('Email inválido.');
      return;
    }

    this.isLoading = true;


    this.isLoading = false;
    this.notificationService.success('Bem-vindo ao GR!');
    this.redirectUrl();
    
  
  }

  redirectUrl = () => {
    this.router.navigateByUrl('/');
  };
}
