import { Component, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { CustomValidators } from '../../../validators/custom-Validators';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from '../form-user/form-user.component';

@Component({
  selector: 'app-create-user',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FileUploadModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    FormUserComponent,
    FormUserComponent,
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent {
  roles = ['ADMIN', 'USER'];

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', []),
  });

  @ViewChild(FormUserComponent) formUserComponent!: FormUserComponent;

  ngOnInit() {
    this.confirmPasswordValidator();
  }

  constructor(private userService: UsersService, private router: Router) {}

  confirmPasswordValidator() {
    this.form.controls.confirmPassword.setValidators([
      Validators.required,
      CustomValidators.matchValues(this.form.controls.password),
    ]);
    this.form.controls.confirmPassword.updateValueAndValidity();
  }

  onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.value;
      const userData = {
        name: formValue.name,
        username: formValue.username,
        role: formValue.role,
        email: formValue.email,
        password: formValue.password,
      };

      const imageFile = this.formUserComponent.getSelectedFile();

      this.userService.createUser(userData, imageFile).subscribe({
        next: (response) => {
          this.form.reset();
          this.router.navigateByUrl('/users');
        },
        error: (err) => {
          console.error('Erro ao criar produto:', err);
        },
      });
    }
  }
}
