import { Component, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  FileUploadModule,
  FileUploadEvent,
  FileUpload,
} from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { InputNumber } from 'primeng/inputnumber';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../../services/auth.service';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-create-product',
  imports: [
    ReactiveFormsModule,
    FileUploadModule,
    ButtonModule,
    InputNumber,
    InputNumberModule,
    FloatLabel,
    InputTextModule,
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
    sizeP: new FormControl(0, [Validators.required, Validators.min(0)]),
    sizeM: new FormControl(0, [Validators.required, Validators.min(0)]),
    sizeG: new FormControl(0, [Validators.required, Validators.min(0)]),
    registredByName: new FormControl('', [Validators.required]),
  });

  @ViewChild('fu') fu!: FileUpload;
  selectedFile?: File;

  constructor(private productsService: ProductsService) {}

  onSubmit() {
    if (this.form.valid) {
      const productData = {
        name: this.form.get('name')?.value,
        description: this.form.get('description')?.value || null, // Pode ser null
        price: this.form.get('price')?.value,
        discount: this.form.get('discount')?.value || 0,
        sizes: [
          {
            stock: this.form.get('sizeP')?.value || 0,
            size: { label: 'P' },
          },
          {
            stock: this.form.get('sizeM')?.value || 0,
            size: { label: 'M' },
          },
          {
            stock: this.form.get('sizeG')?.value || 0,
            size: { label: 'G' },
          },
        ],
        registredByName: {
          name: this.form.get('registredByName')?.value,
          avatarUrl: '',
        },
      };

      const imageFile = this.fu?.files?.[0]; // Arquivo do upload
      
      this.productsService.createProduct(productData, imageFile).subscribe({
        next: (response) => {
          console.log('Produto criado:', response);
        },
        error: (err) => {
          console.error('Erro ao criar produto:', err);
        },
      });
      console.log(productData, imageFile)
    }
  }
}
