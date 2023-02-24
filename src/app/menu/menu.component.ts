import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../services/pizza/pizza.service';
import { Pizza } from '../shared/pizza/pizza';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pizzas:Pizza[] = [];
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'] ) { 
        this.pizzas = this.pizzaService.getAll().filter(pizza =>
          pizza.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
        } else {
          this.pizzas = this.pizzaService.getAll();
        }
      
    })
  }

  constructor(private pizzaService:PizzaService, private route: ActivatedRoute) { }

}
