import {Injectable} from "angular2/core";
import {payment} from "../Mock/payment.mock.json";

export interface ICheckoutType {
    name:string;
    pay(totalPrice:number):string;
}
export interface ICheckout {
    checkOut(totalPrice:number):string;
}

export class DefaultCheckout implements ICheckout{
    private _checkOutType:ICheckoutType = null;
    set checkOutType(value:ICheckoutType) {
        this._checkOutType = value;
    }
    checkOut(totalPrice:number){
        return this._checkOutType ? this._checkOutType.pay(totalPrice) : "BORGAÐU NÚNA!";
    }

}

