import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { RecipeShowComponent } from "./recipe-show/recipe-show.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'chefs',
    component: HomeComponent
  },
  {
    path: 'recipes',
    component: HomeComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeShowComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
