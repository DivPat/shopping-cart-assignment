import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { ProductComponent } from './product/product.component';
import { HomeResolver } from './resolvers/home.resolver';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  resolve: { homeData: HomeResolver }
},
{
  path: 'product',
  component: ProductComponent,
},
{
  path: 'auth',
  loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
},

{
  path: 'cart',
  component: CartComponent
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
