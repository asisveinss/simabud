import { ICheckoutType } from "../Services/checkout.service";


export class Pleasure implements ICheckoutType {
    public name;
    constructor() {
        this.name = "Pleasure";
    }
    pay(totalPrice) {
        return `Pleasure: pay stage 1 with amount ${totalPrice}
        Pleasure: pay stage 2
        Pleasure: payed`;
    }
}

export class Cash implements ICheckoutType {
    public name;
    constructor() {
        this.name = "Cash";
    }
    pay(totalPrice) {
        return `Cash: pay stage 1 with amount ${totalPrice}
        Cash: pay stage 2
        Cash: payed`;
    }
}