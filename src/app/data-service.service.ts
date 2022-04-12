import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  urls = {
    "invoiceData": "https://localhost:7118/api/InvoiceItems/",
    "ClientData": "https://localhost:7118/api/Clients/"
  }

  selectedClientId:any;

  getInvoiceData() {
    return this.http.get(`${this.urls.invoiceData}ByInvoiceNumber?InvoiceNumber=GHYJ7898`);
  }

  getClientDataById(id: any)

  {
    return this.http.get(`${this.urls.ClientData}${id}`);
  }

  getClientData()

  {
    return this.http.get(`${this.urls.ClientData}`);
  }

}
