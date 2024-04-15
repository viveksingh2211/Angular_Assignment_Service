import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EmpDataService {
  constructor(private router: Router) {}
  employeesData = [
    {
      empId: '001',
      empName: 'John',
      designation: 'Associat Developer',
    },
    {
      empId: '002',
      empName: 'Don',
      designation: 'Associat Software',
    },
    {
      empId: '003',
      empName: 'Motu',
      designation: 'Assistant Developer',
    },
  ];

  getAllemp() {
    return this.employeesData;
  }

  getEmpById(id: string) {
    return this.employeesData.find((e) => e.empId === id);
  }
}
