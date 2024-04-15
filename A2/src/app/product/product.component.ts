import { Component } from '@angular/core';
import { ProductDataService } from '../newServce/product-data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products: any = [];

  constructor(private productService: ProductDataService) {}

  ngOnInit() {
    this.products = this.productService.medicines;
    // console.log(this.products)
  }
  
  onSubmit(medicine: any) {
    this.productService.onSubmit(medicine);
  }
}
