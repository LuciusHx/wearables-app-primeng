import { Component, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FileUploadModule, FileUpload } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { InputNumber } from 'primeng/inputnumber';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  imports: [
    ReactiveFormsModule,
    FileUploadModule,
    ButtonModule,
    InputNumber,
    InputNumberModule,
    FloatLabel,
    InputTextModule,
  ],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss',
})
export class EditProductComponent {
  public id!: string;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl<number | null>(0, [Validators.required]),
    discount: new FormControl<number | null>(0, [Validators.required]),
    category: new FormControl('', [Validators.required]),
    sizeP: new FormControl(0, [Validators.required, Validators.min(0)]),
    sizeM: new FormControl(0, [Validators.required, Validators.min(0)]),
    sizeG: new FormControl(0, [Validators.required, Validators.min(0)]),
  });

  @ViewChild('fu') fu!: FileUpload;
  selectedFile?: File;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    this.productsService.getProductsById(this.id).subscribe({
      next: (res) => {
        const sizeP = res.sizes.find((s) => s.size?.label === 'P')?.stock || 0;
        const sizeM = res.sizes.find((s) => s.size?.label === 'M')?.stock || 0;
        const sizeG = res.sizes.find((s) => s.size?.label === 'G')?.stock || 0;

        this.form.setValue({
          name: res.name,
          description: res.description || '',
          price: res.price,
          discount: res.discount,
          category: res.category.name,
          sizeP: sizeP,
          sizeM: sizeM,
          sizeG: sizeG,
        });
      },
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.value;
      const productData = {
        name: formValue.name,
        description: formValue.description,
        price: formValue.price,
        discount: formValue.discount,
        category: formValue.category,
        sizes: [
          {
            label: 'P',
            stock: formValue.sizeP,
          },
          {
            label: 'M',
            stock: formValue.sizeM,
          },
          {
            label: 'G',
            stock: formValue.sizeG,
          },
        ],
      };

      const imageFile = this.fu?.files?.[0];

      this.productsService.updateProduct(this.id, productData, imageFile);
    }
  }
}
