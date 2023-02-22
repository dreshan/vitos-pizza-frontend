import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPageState } from 'src/app/shared/pizza/RegisterPageState';

@Injectable({
  providedIn: 'root'
})
export class RegisterationServiceService {

  constructor(private httpClient:HttpClient) { }

  public registerUserWithOrder(registerPageState:RegisterPageState) {
      alert('in RegisterationServiceService ::::' );
      return this.httpClient.post<any>('http://localhost:8083/api/v1/currency-exchange/save', registerPageState);
  }
}
