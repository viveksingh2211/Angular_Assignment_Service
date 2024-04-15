import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product: any;
  ngOnInit() {
    // console.log(history.state);
    const state = history.state;
    this.product = state;
  }
  count = 0;
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }
}
