import { Injectable } from '@angular/core';
import {MacaroonType} from "../types/macaroon.type";

@Injectable()
export class ProductsService {
  constructor() { }

  getProducts(): MacaroonType[]{
   return [
      {
        image: 'macaroon%201.png',
        title: 'Макарун с малиной',
        count: '1 шт.',
        price:  1.70,
      },
      {
        image: 'macaroon%202.png',
        title: 'Макарун с манго',
        count: '1 шт.',
        price:  1.70,
      },
      {
        image: 'macaroon%203.png',
        title: 'Пирог с ванилью',
        count: '1 шт.',
        price:  1.70,
      },
      {
        image: 'macaroon%204.png',
        title: 'Пирог с фисташками',
        count: '1 шт.',
        price: 1.70,
      },
    ]
  }

}
