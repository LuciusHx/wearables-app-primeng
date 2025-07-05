import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeaderComponent } from '../../components/header/header.component';

import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-product-detail',
  imports: [HeaderComponent, CardModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  id: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';
  }
}
