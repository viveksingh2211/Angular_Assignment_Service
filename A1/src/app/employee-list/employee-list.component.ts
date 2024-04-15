import { Component } from '@angular/core';
import { EmpDataService } from '../newService/emp-data.service';
import { CommonModule } from '@angular/common';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, EmployeeDetailComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  employees: any;
  currentEmp: any = {};

  constructor(private dataService: EmpDataService) {}
  ngOnInit() {
    this.employees = this.dataService.employeesData; // Get the employee data
  }

  onSubmit(id: string) {
    this.currentEmp = this.dataService.getEmpById(id);
    // console.log(this.currentEmp);
  }
}
