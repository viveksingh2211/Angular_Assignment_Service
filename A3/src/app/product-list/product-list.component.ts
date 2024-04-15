import { Component } from '@angular/core';
import { ServiceDataService } from '../newService/service-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  product: any;

  constructor(
    private serviceData: ServiceDataService,private router: Router) {}
  ngOnInit() {
    this.product = this.serviceData.smartphone;
  }

  onSubmit(id: string) {
    const prod = this.serviceData.getOneProd(id); // return a product object with the given id
    this.router.navigateByUrl('/product-details', {
      state: prod,
    });
  }
}
