import { Component, OnInit } from '@angular/core';

import { DataServiceService } from '../data-service.service';

import { Router, RouterModule, Routes } from '@angular/router';


@Component({

  selector: 'app-select-client',

  templateUrl: './select-client.component.html',

  styleUrls: ['./select-client.component.css']

})

export class SelectClientComponent implements OnInit {



  constructor(private ds: DataServiceService, private router: Router) { }

  Clients: any;




  ngOnInit(): void {

    this.ds.getClientData().subscribe(data => this.fecthClientData(data))

  }



  fecthClientData(data: any) {

    this.Clients = data;

    console.log(this.Clients);

  }



  selectClient(data: any) {

    this.ds.selectedClientId = data;
    console.log(this.ds.selectedClientId);


  }

  submitSelectedClient() {
    
    this.router.navigate(['/invoice']);
  }

}