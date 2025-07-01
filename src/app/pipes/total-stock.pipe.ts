import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../app/models/product.model'

@Pipe({
  name: 'totalStock'
})
export class TotalStockPipe implements PipeTransform {

   transform(produto: Product): number {
    if (!produto.sizes) return 0;
    return produto.sizes.reduce((total, size) => total + size.stock, 0);
  }
}
