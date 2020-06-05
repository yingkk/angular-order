import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { GoodsComponent } from './components/goods/goods.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'goods',
    component: GoodsComponent
  },
  {
    // get传参
    path: 'detail',
    // 动态路由传参
    // path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
