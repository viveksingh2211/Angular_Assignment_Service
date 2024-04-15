import { Component } from '@angular/core';
import { ServiceDataService } from '../newService/service-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css',
})
export class PersonListComponent {
  persons: any;
  constructor(private serviceData: ServiceDataService,private router:Router) {}

  ngOnInit() {
    this.persons = this.serviceData.person;
  }

  onSubmit(id: string) {
    const per = this.serviceData.getOnePerson(id); // return a product object with the given id
    this.router.navigateByUrl('/person-profile', {
      state: per,
    });
  }
}
