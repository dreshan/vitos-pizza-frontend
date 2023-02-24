import { Pizza } from "./pizza";


export class CartItem {

    constructor (pizza:Pizza) {
        this.pizza = pizza;
    }
    pizza!:Pizza; 
    quantity:number = 1;  

    get price(): number {
        return this.pizza.price * this.quantity;
    }
}