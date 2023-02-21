import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { PizzaService } from '../services/pizza/pizza.service';
import { Cart } from '../shared/pizza/Cart';
import { CartItem } from '../shared/pizza/CartItem';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {
  cart!:Cart;
  
  constructor(private cartService: CartService, private router:Router){
    this.setCart();
  }

  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.pizza.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.pizza.id, quantity);
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  toPercase(){
    this.router.navigateByUrl('/register-page');
  }
}
