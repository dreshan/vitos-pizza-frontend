import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { PizzaService } from '../services/pizza/pizza.service';
import { Pizza } from '../shared/pizza/pizza';

@Component({
  selector: 'app-pizzadetails',
  templateUrl: './pizzadetails.component.html',
  styleUrls: ['./pizzadetails.component.css']
})
export class PizzadetailsComponent implements OnInit{

  pizza!:Pizza;

  constructor(private activatedRoute:ActivatedRoute, 
              private pizzaService:PizzaService,
              private cartService:CartService,
              private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.pizza = pizzaService.getFoodById(params['id'])
      }
    })
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.pizza);
    this.router.navigateByUrl('/cart-page');
  }

}
