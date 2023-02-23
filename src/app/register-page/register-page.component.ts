import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { AppComponent, User } from '../app.component';
import { RegisterPageState } from '../shared/pizza/RegisterPageState';
import { CartService } from '../services/cart/cart.service';
import { RegisterationServiceService } from '../services/userregister/registeration-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})

export class RegisterPageComponent implements OnInit {
emailValidation: any;

constructor(private http:HttpClient, 
            private router:Router,
            private cartService:CartService,
            private registerationService:RegisterationServiceService) { }

  private registerUserDetails: RegisterPageState = {  
      firstname: '',
      lastname: '',
      address: '',
      email: '',
      phone: '',
      pizzaName: '',
      quantity: 0,
      amount: 0
  };

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


  public registerUserWithOrder(forms: NgForm): void {
    alert('value :::: '+this.cartService.getCartItem().pizza.name)
    this.registerUserDetails = {
      ...forms.value,
      pizzaName: this.cartService.getCartItem().pizza.name,
      amount: this.cartService.getCartItem().price,
      quantity: this.cartService.getCartItem().quantity
    }

    this.registerationService.registerUserWithOrder(this.registerUserDetails).subscribe(
      (response) => {
        console.log(response);
        console.log('response value ::: '+response.text());
        this.router.navigateByUrl('/order-confirmation');
      },
      error => {
        console.log(error);
      });
  }


  ngOnInit() {
  }

}
