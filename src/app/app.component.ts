import { Component } from '@angular/core';
import EmployeesData from './employees.json';

interface Employee {
  companyId: Number;
  tel: String;
  address: String;
  companyName: String;
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Rwanda-Companies';
  employees: Employee[] = EmployeesData;
}
