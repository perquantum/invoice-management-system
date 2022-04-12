import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private ht: HttpClient) { }

  ngOnInit(): void {
  }

  url = "https://localhost:7031/api/companies/";
  creds:any = {};

  LogIn(username:string, password:string){
    this.ht.get(this.url).subscribe(data => this.creds = data);

    this.creds.forEach((e: any) => {
      if(e.username == username && e.password == password){
        this.router.navigate(['/dashboard']);
      }
    });
  }
  SignUp(){
    this.router.navigate(['/signup']);
  }
}