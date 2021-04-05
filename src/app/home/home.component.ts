import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BazaarDataService } from '../services/bazaar-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  banners: any;
  categories: any;

  constructor(private bannerDataService: BazaarDataService, private route: Router, private actiavtedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.banners = this.actiavtedRoute.snapshot.data.homeData[0];
    const categoriesData = this.actiavtedRoute.snapshot.data.homeData[1];
    this.categories = categoriesData.filter(category => category.enabled);
  }

  exploreCategory(categoryId) {
    const categoryDetails: NavigationExtras = {
      state: {
        categoryId
      }
    };
    this.route.navigate(['product'], categoryDetails)
  }

}
