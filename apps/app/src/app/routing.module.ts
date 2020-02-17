import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@app/auth';
import { DrinksComponent } from './drinks/drinks.component';
import { Code404Component } from '@app/error-pages';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'drinks/:id', component: DrinksComponent},
  { path: 'login', component: LoginComponent },
  { path: 'notfound', component: Code404Component },
  { path: '**', redirectTo: 'notfound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})
export class RoutingModule { }
