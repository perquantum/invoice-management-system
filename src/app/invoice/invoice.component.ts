import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private dS: DataServiceService) { }
  clientData: any;


  addToClientData(data: any) {
    this.clientData = data;
    console.log(this.clientData);
  }
  ngOnInit(): void {
    this.dS.getClientDataById(this.dS.selectedClientId).subscribe((data) => this.addToClientData(data));

  }

}
