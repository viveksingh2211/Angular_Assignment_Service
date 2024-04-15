import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'product-detail',
    component: ProductDetailComponent,
  },
];
