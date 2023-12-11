import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MacaroonType} from "../../types/macaroon.type";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: MacaroonType
  @Input() index!:number

  @Output() addToCartEvent: EventEmitter<MacaroonType> = new EventEmitter<MacaroonType>()

  constructor() {
    this.product = {
      image:'',
      title: '',
      count: '',
      price: 0
    }
  }

  ngOnInit(): void {

  }

addProductToCart(){
    this.addToCartEvent.emit(this.product)
}




}
