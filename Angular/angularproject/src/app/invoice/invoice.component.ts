import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DatatransferService } from '../datatransfer.service';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  total=0;
 addprice(value:any)
 {
   this.total=100*value;
 }
 amoun=0;
 addtax(value:any)
 {
this.amoun=this.total+(value/100*this.total);
console.log(this.amoun);
 }
 form = new FormGroup({
   id:new FormControl('',Validators.required),
  itemname: new FormControl('', Validators.required),
  quantity: new FormControl('', [Validators.required]),
  price: new FormControl('', Validators.required),
  tax: new FormControl('', Validators.required),
  amount:new FormControl('', Validators.required)
 
});
itemnam:any;
submit()
{
  console.log(this.itemnam);
}

}
