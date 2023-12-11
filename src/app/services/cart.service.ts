import {Injectable} from '@angular/core';
import {ProductComponent} from "../components/product/product.component";
import {MacaroonType} from "../types/macaroon.type";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  count: number = 0
  price: number = 0

  constructor() {
  }

  addPrice(macaroon:MacaroonType){
   this.price += macaroon.price
  }
  setPrice(){
    return this.price
  }
}
