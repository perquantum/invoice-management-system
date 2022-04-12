import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private dS: DataServiceService) { }

  invoiceList: any;
  clientData: any;

  addToInvoiceList(data: any) {
    this.invoiceList = data;
    console.log(this.invoiceList);
  }

  
  ngOnInit(): void {
    this.dS.getInvoiceData().subscribe((data) => this.addToInvoiceList(data));

  }

}
