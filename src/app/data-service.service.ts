import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  urls = {
    "invoiceData": "https://localhost:7118/api/InvoiceDetails/"
  }

  getInvoiceData() {
    return this.http.get(this.urls.invoiceData);
  }
}
