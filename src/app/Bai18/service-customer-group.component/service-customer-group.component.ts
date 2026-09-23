import { Component } from '@angular/core';
import { CustomerHttpService } from '../customer-http.service';

@Component({
  selector: 'app-service-customer-group',
  standalone: false,
  templateUrl: './service-customer-group.component.html',
  styleUrls: ['./service-customer-group.component.css']
})
export class ServiceCustomerGroupComponent {
  customerGroups: any;
  errMessage: string = '';

  constructor(private _service: CustomerHttpService) {
    this._service.getCustomersHandleError().subscribe({
      next: (data) => { this.customerGroups = data; },
      error: (err) => { this.errMessage = err.message; }
    });
  }
}