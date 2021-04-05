import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, takeWhile } from 'rxjs/operators';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  currentUrl = '';
  private _isComponentActive = true;
  totalCartItems: number;

  constructor(private cartService: CartService, private router: Router) {

  }

  ngOnInit() {
    this.cartService.getTotalCartItems().pipe(takeWhile(() => this._isComponentActive)).subscribe(value => {
      this.totalCartItems = value;
    });
    this.router.events.pipe(takeWhile(() => this._isComponentActive), filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => { 
        this.currentUrl = event.url;
      })
  }

  ngOnDestroy() {
    this._isComponentActive = false;
  }
}
