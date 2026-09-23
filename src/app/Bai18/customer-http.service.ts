import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerHttpService {
  // Cố tình sai để test xử lý lỗi: đổi thành "customersXXX.json"
  private _url: string = "./assets/data/customers.json";

  constructor(private _http: HttpClient) { }

  getCustomers(): Observable<any> {
    return this._http.get(this._url);
  }

  getCustomersHandleError() {
    return this._http.get(this._url)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}