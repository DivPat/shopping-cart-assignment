import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  $cartValue: BehaviorSubject<number>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.$cartValue = this.cartService.getTotalCartItems();
  }

}
