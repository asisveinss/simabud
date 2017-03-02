import {ICheckoutType} from "../Services/checkout.service";
import {Cash, Pleasure} from '../Utils/payment';

export var payment:ICheckoutType[] = [new Cash(), new Pleasure()];