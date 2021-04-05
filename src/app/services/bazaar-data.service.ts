import { Injectable } from '@angular/core';
import { DataService } from './data-service';

@Injectable({
    providedIn: 'root'
})

export class BazaarDataService {
    banners = [];
    categories = [];
    products = [];

    getBannersData() {
        if (this.banners.length === 0) {
            return DataService.getRequest("banners");
        }
        return Promise.resolve(this.banners);
    }

    getCategoriesData() {
        if (this.categories.length === 0) {
            return DataService.getRequest("categories");
        }
        return Promise.resolve(this.categories);
    }

    getProductsData() {
        if (this.products.length === 0) {
            return DataService.getRequest("products");
        }
        return Promise.resolve(this.products);
    }


    addToCart(productId) {
        return DataService.postRequest("addToCart",productId);
    }
}
