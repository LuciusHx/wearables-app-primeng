import { Component } from '@angular/core';
import { CustomInputComponent } from '../../../components/custom-input/custom-input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FileUploadModule, UploadEvent } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { FluidModule } from 'primeng/fluid';
import { InputNumber } from 'primeng/inputnumber';

@Component({
  selector: 'app-create-product',
  imports: [
    CustomInputComponent,
    ReactiveFormsModule,
    FileUploadModule,
    ButtonModule,
    FluidModule,
    InputNumber,
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    discount: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });

  onUpload(event: UploadEvent) {
    console.log('upload');
  }
}
