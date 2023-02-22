import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { User } from '../app.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  ngOnInit(): void {
    if(sessionStorage.length>0) {
        this.router.navigate(['card-page']);
    }
  }

  constructor (private httpClient:HttpClient, private router:Router){}

  model:Login={
    username:'user',
    password:'user'
  };

  message?:string;

  sendFeedback(): void {
    let url = "http://localhost:8080/login";
    let key='userData';
    this.httpClient.post<User>(url,this.model).subscribe(
      res => {
        // localStorage.setItem(key,JSON.stringify(res));
        sessionStorage.setItem(key,JSON.stringify(res));
        if(res!=null) {
          this.router.navigate(['card-page']);
        }

        if(res==null) {
          this.message = "Username Or Password is Wrong";
          sessionStorage.clear();
        }
      },
      err=>{
        console.log([this.model]);
        alert("An error has occurred while logging in");
      }
    )
  }

}

export interface Login {
  username:string;
  password:string;
}
