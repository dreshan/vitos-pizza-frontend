import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupUserInfor } from 'src/app/shared/pizza/SignupUserInfor';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpclient:HttpClient) { }

  public signupUser(signupUserInfor:SignupUserInfor) {
    return this.httpclient.post<any>('http://localhost:8080/vitospizzaserver/customer/signupUserInfor', signupUserInfor);
  }

  public checkUsernameAvailability(username:string) {
    return this.httpclient.post<any>('http://localhost:8080/vitospizzaserver/customer/checkUsernameAvailability', username);
  }
}
