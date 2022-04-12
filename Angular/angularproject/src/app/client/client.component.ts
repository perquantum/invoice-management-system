import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(public ht:HttpClient) { }

  url = "https://localhost:7031/api/Clients/";
  obj:any = {
      "name": "",
      "gstNumber": "",
      "address": "",
      "pan": ""
  }

  ngOnInit(): void {
  }

  submit(clientform:any){
    this.obj = {
      "name": clientform.name,
      "gstNumber": clientform.gstNumber,
      "address": clientform.address,
      "pan": clientform.pan,
    }

    this.ht.post(this.url, this.obj).subscribe();
  }
}