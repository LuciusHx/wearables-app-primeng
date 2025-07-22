import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-auth',
  imports: [
    IftaLabelModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private utilsService: UtilsService
  ) {}

  ngOnInit() {
    if (this.authService.isLogged()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.authService.login({ email: email!, password: password! }).subscribe({
        next: (response) => {
          this.utilsService.setElementInLocalStorage(
            'auth_token',
            response.token
          );
          this.utilsService.setElementInLocalStorage('user', response.user.id);
          this.utilsService.presentToast(
            'success',
            'Sucesso',
            'Login efetuado com sucesso!',
            4000
          );
          this.router.navigateByUrl('/dashboard');
        },
        error: (err) => {
          console.error('Erro no login:', err);
          this.utilsService.presentToast(
            'error',
            'Erro',
            'Não foi possível concluir o login!',
            5000
          );
        },
      });
    }
  }
}
