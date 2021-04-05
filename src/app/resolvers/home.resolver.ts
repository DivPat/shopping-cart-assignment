import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, concat } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BazaarDataService } from '../services/bazaar-data.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<any> {
  constructor(private bazaarDataService: BazaarDataService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return Promise.all([this.bazaarDataService.getBannersData(), this.bazaarDataService.getCategoriesData()])
  }
}
