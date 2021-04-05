import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BazaarDataService } from '../services/bazaar-data.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  categories: any[];
  products: any[];
  selectedCategoryId: string;
  filteredProducts: any[];
  showAll: boolean = true;
  currentState: any;

  constructor(private bazaarDataService: BazaarDataService, private router: Router, private cartService: CartService) {
    this.currentState = this.router.getCurrentNavigation()?.extras
  }


  ngOnInit(): void {
    this.bazaarDataService.getCategoriesData().then((data: any[]) => this.categories = data.filter(category => category.enabled));
    this.bazaarDataService.getProductsData().then(data => {
      this.products = data;
      this.filterProducts(this.currentState?.state?.categoryId);
    });
  }

  filterProducts(categoryId: string) {
    if (this.selectedCategoryId === categoryId) {
      this.filteredProducts = this.products.slice();
    } else {
      this.selectedCategoryId = categoryId;
      this.filteredProducts = this.products.filter(product => product.category === categoryId);
    }

  }

  buyNow(productId) {
    this.bazaarDataService.addToCart({ productId });
    const { name, imageURL, price } = this.filteredProducts.find(product => product.id === productId);
    this.cartService.updateCart(productId, name, imageURL, price);
  }

}
