import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-form-user',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FileUploadModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
  ],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.scss',
})
export class FormUserComponent {
  roles = ['ADMIN', 'USER'];

  @Input({ required: true }) form!: FormGroup;
  @Output() onSubmitOutput = new EventEmitter<any>();

  @ViewChild('fu') fileUpload!: FileUpload;

  onSubmit() {
    this.onSubmitOutput.emit();
  }

  getSelectedFile(): File | undefined {
    return this.fileUpload?.files?.[0];
  }
}
