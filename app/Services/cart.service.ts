import { Injectable } from 'angular2/core';
import { Item } from '../Brand/item.brand';
import { DefaultCheckout } from "./checkout.service";


@Injectable()
export class CartService {
    private cart: Item[] = [];
    addItem(item: Item) {
        this.cart.push(item);
    }
    deleteItem(item: Item) {
        this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
    }
    clearCart() {
        this.cart = [];
    }
    getCart(): Item[] {
        return this.cart;
    }
    getTotalPrice() {
        let totalPrice = this.cart.reduce((sum, cartItem) => {
            return sum += cartItem.price, sum;
        }, 0);
        return totalPrice;
    }
}