import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../services/pizza/pizza.service';
import { Pizza } from '../shared/pizza/pizza';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  pizzas:Pizza[] = [];

  constructor(private pizzaService:PizzaService, private route: ActivatedRoute) { }

   ngOnInit() {
        this.route.params.subscribe(params => {
          if (params['searchTerm'] ) { 
            this.pizzas = this.pizzaService.getAll().filter(pizza =>
              pizza.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
            } else {
              this.pizzas = this.pizzaService.getAll();
            }
          
        })
   }
 }



 