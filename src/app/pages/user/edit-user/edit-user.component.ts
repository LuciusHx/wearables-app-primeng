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
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    FileUploadModule,
    InputTextModule,
    SelectModule,
  ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss',
})
export class EditUserComponent {
  roles = ['ADMIN', 'CLIENT'];

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private userService: UsersService, private router: Router) {}

  @ViewChild('fu') fu!: FileUpload;
  selectedFile?: File;

  loadUser() {}

  onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.value;
      const userData = {
        name: formValue.name,
        username: formValue.username,
        role: formValue.role,
        email: formValue.email,
      };

      const imageFile = this.fu?.files?.[0];

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
