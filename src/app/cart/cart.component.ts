import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  totalCartItems: number;
  $cartProducts: BehaviorSubject<any[]>;
  $cartPrice: BehaviorSubject<number>;
  private _isComponentActive: boolean = true;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getTotalCartItems().pipe(takeWhile(() => this._isComponentActive)).subscribe(value => this.totalCartItems = value);
    this.$cartProducts = this.cartService.getCartDetails();
    this.$cartPrice = this.cartService.getCartPrice();
  }

  updateProduct(productId, increment) {
    this.cartService.updateProduct(productId, increment);
  }

  ngOnDestroy() {
    this._isComponentActive = false;
  }

}


