import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';
import { FormProductComponent } from '../form-product/form-product.component';

@Component({
  selector: 'app-create-product',
  imports: [FormProductComponent],
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
  });

  @ViewChild(FormProductComponent) formProductComponent!: FormProductComponent;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

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

      const imageFile = this.formProductComponent.getSelectedFile();

      this.productsService.createProduct(productData, imageFile).subscribe({
        next: (response) => {
          this.form.reset();
          this.router.navigateByUrl('/produtos');
        },
        error: (err) => {
          console.error('Erro ao criar produto:', err);
        },
      });
    }
  }
}
