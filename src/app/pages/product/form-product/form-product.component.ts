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
import { FloatLabel } from 'primeng/floatlabel';
import { InputNumber, InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-form-product',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FileUploadModule,
    ButtonModule,
    InputNumber,
    InputNumberModule,
    FloatLabel,
    InputTextModule,
  ],
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.scss',
})
export class FormProductComponent {
  @Input({ required: true }) form!: FormGroup;
  @Output() onSubmitOutput = new EventEmitter<void>();

  @ViewChild('fu') fileUpload!: FileUpload;

  onSubmit() {
    this.onSubmitOutput.emit();
  }

  getSelectedFile(): File | undefined {
    return this.fileUpload?.files?.[0];
  }
}
