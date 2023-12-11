import {Component, OnInit} from '@angular/core';
import {FeatureType} from "./types/feature.type";
import {MacaroonType} from "./types/macaroon.type";
import {FormType} from "./types/form.type";
import {ProductsService} from "./services/products.service";
import {CartService} from "./services/cart.service";
import {ProductComponent} from "./components/product/product.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // phone: string = '+375 (29) 368-98-68';
  phone: string = '375293689868';
  social: string = 'https://google.com/';

  showPresent: boolean = true;

  isOpenMenu: boolean = false

  macaroons: MacaroonType[] = [];

  public formValues: FormType = {
    choice: '',
    name: '',
    phone: ''
  };

  constructor(private product: ProductsService,
              public cart: CartService,) {
  }

  ngOnInit() {
    this.macaroons = this.product.getProducts()
  }


  public scrollTo(target: HTMLElement) {
    target.scrollIntoView({behavior: 'smooth'});
    if (this.isOpenMenu) {
      this.isOpenMenu = false;
    }
  };

  public addToCart(macaroon: MacaroonType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.choice = macaroon.title.toUpperCase();
    this.cart.count++
    this.cart.addPrice(macaroon)
    alert(`${macaroon.title} добавлен в корзину!`)
  };


  public open(): void {
    this.isOpenMenu = true;
  }


  public close(): void {
    this.isOpenMenu = false;
  }

  public sendOrder(): void {
    if (!this.formValues.choice) {
      alert("Выберите макарун")
      return
    }
    if (!this.formValues.name) {
      alert("Введите имя")
      return
    }
    if (!this.formValues.phone) {
      alert("Введите телефон")
      return
    }

    alert("Спасибо за заказ")
    this.formValues = {
      choice: '',
      name: '',
      phone: ''
    }

  };
};
