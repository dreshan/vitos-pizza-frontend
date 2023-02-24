import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SigninUser } from 'src/app/shared/pizza/SigninUser';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  constructor(private httpclient:HttpClient) { }

  public signinUser(signinUser:SigninUser) {
    alert('test alert :::'+signinUser.username)
      return this.httpclient.post<any>('http://localhost:8080/vitospizzaserver/loginUserService', signinUser);
  }
}
