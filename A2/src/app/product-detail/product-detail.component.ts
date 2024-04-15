import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ProductDataService } from '../newServce/product-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product: any;

  constructor(private productDataService: ProductDataService) {}

  ngOnInit() {
    const state = history.state;
    this.product = state;
  }

  count = 0;
  counter(type:string){
    type==='add'?this.count++:this.count--;
  }
}
