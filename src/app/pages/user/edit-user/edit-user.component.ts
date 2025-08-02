import { Component, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidators } from '../../../validators/custom-Validators';
import { FormUserComponent } from "../form-user/form-user.component";

@Component({
  selector: 'app-edit-user',
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    FileUploadModule,
    InputTextModule,
    SelectModule,
    FormUserComponent
],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss',
})
export class EditUserComponent {
  roles = ['ADMIN', 'USER'];

  public id!: string;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', []),
  });

  constructor(
    private userService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  @ViewChild(FormUserComponent) formUserComponent!: FormUserComponent;

  ngOnInit() {
    this.loadUser();
    this.confirmPasswordValidator();
  }

  confirmPasswordValidator() {
    this.form.controls.confirmPassword.setValidators([
      Validators.required,
      CustomValidators.matchValues(this.form.controls.password),
    ]);
    this.form.controls.confirmPassword.updateValueAndValidity();
  }

  loadUser() {
    this.userService.getUserById(this.id).subscribe({
      next: (res) => {
        this.form.setValue({
          name: res.name,
          username: res.username,
          role: res.role,
          email: res.email,
          password: '',
          confirmPassword: '',
        });
      },
    });
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

      this.userService.updateUser(this.id, userData, imageFile).subscribe({
        next: (res) => {
          this.form.reset();
          this.router.navigateByUrl('/users');
        },
        error: (err) => {
          console.error('Erro ao editar usuário:', err);
        },
      });
    }
  }
}
