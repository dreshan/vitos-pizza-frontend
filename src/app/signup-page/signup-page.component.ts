import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { AppComponent, User } from '../app.component';
import { SignupUserInfor } from '../shared/pizza/SignupUserInfor';
import { SignupService } from '../services/signup/signup.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor (private httpClient:HttpClient, 
                private router:Router,
                private signupService:SignupService) {}

  ngOnInit(): void {
    
  }

  signupUserInfor:SignupUserInfor = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      address: '',
      email: '',
      phone: ''
  }


  model:User={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    address:'',
    phone:''
  };

  options?:string;
  present?:boolean;
  usernameAvailability?:string;
  fontColor?:string;

  phoneValidation:boolean=true;
  emailValidation:boolean=true;
  passwordValidation:boolean=true;





checkPhone()
{
  let matcher = new RegExp('^[+ 0-9]{10}$');
  if (String(this.model.phone).length==10)
    this.phoneValidation=(matcher.test(String(this.model.phone)));
}

checkEmail(){
  if(this.model.email.length==0)
  {
    this.emailValidation=true;
  }
  if(this.model.email.length>0 &&(this.model.email).indexOf("@")==-1)
    this.emailValidation=false;
  if(this.model.email.length>0 &&(this.model.email).indexOf("@")!=-1)
    this.emailValidation=true;
}

passwordStrength(){
  if(this.model.password.length==0)
    this.passwordValidation=true;
  if(this.model.password.length<8)
    this.passwordValidation=false;
  if(this.model.password.length>=8)
  {
    let matcher = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,16})');
    this.passwordValidation=matcher.test(this.model.password);
  }
}

registerUser():void{

  let url = "http://localhost:8080/register";
  this.httpClient.post<User>(url,this.model).subscribe(
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

    public signupUserInformation(form: NgForm) : void {
      this.signupUserInfor = {
        ...form.value
      }

      this.signupService.signupUser(this.signupUserInfor).subscribe(
        (response) => {
          this.router.navigateByUrl('')
        },
        error => {
          console.log(error);
        }
      );
    }

    public usernamePresent():void {
      
      this.fontColor='';
      this.signupService.checkUsernameAvailability(this.model.username).subscribe(
        res=>{
          alert('1232222' +res);
          this.present=res;
          console.log(this.present);
          if(this.present) {
            this.fontColor="red";
            this.usernameAvailability = "UserName Already Taken";
          } else {
            this.fontColor="green";
            this.usernameAvailability = "Available";
          }
          this.router.navigate(['sigup-page']);
        }
      )
    }

  
}
