import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'products'
},
{
  path: 'products',
  loadChildren: './products/products.module#ProductsModule'
},
{
  path: 'auth',
  loadChildren: () => AuthModule,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
