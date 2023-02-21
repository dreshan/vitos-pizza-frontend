import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { AppComponent, User } from '../app.component';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})

export class RegisterPageComponent implements OnInit {
emailValidation: any;

constructor(private http:HttpClient, private router:Router) { }

  model:User={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    address:'',
    phone:''
  };

  options:string='';
  present:boolean = false;
  usernameAvailability?:string;
  fontColor?:string;


  registerUser():void{

    let url = "http://localhost:8080/register";
    this.http.post<User>(url,this.model).subscribe(
      res=>{
        AppComponent.modelUser =res;
        this.router.navigate(['welcome']);
      },
      err=>{
        console.log([this.model]);
        alert("An error has occurred while Registering");
      }
    )
  }

  ngOnInit() {
  }

}
