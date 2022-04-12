import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public ht:HttpClient) { }

  url = "https://localhost:7031/api/companies/";
  obj : any ={
    "name": "",
    "address": "",
    "contact": "",
    "username": "",
    "password": ""
  }

  ngOnInit(): void {
  }

  submit(signup:any){
    this.obj = {
      "name": signup.name,
      "address": signup.address,
      "contact": signup.contact,
      "username": signup.username,
      "password": signup.password
    }
    this.ht.post(this.url, this.obj).subscribe();
  }

}
