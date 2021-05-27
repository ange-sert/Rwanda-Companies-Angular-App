import { Component } from '@angular/core';
import companiesData from './employees.json';  


interface company {
  companyId: string;
  tel: string;
  address: string;
  companyName: string;
} 
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  companies: company[] = companiesData;
  companyName: any;
  title: any;

  Search() {
    if (this.companyName == '') {
      this.ngOnInit();
    } else {
      this.companies = this.companies.filter((res) => {
        return res.companyName
          .toLocaleLowerCase()
          .match(this.companyName.toLocaleLowerCase());
      });
    }
  }
  ngOnInit() {
    throw new Error('Method not implemented.');
  }
}
