import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { User } from '../app.component';
import { LoginPageService } from '../services/login/login-page.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  ngOnInit(): void {
    // if(sessionStorage.length>0) {
    //     this.router.navigate(['card-page']);
    // }
  }

  constructor (private httpClient:HttpClient, 
    private router:Router,
    private loginPageService:LoginPageService){}

  model:Login={
    username:'user',
    password:'user'
  };

  message?:string;

  sendFeedback(): void {

    let key='userData';
    this.loginPageService.signinUser(this.model).subscribe(
      response => {
        if (response.code == 200 && response.message == "Successfully Signin") {
          this.router.navigateByUrl('/menu-page');
        }
      },
      errormsg=>{
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
