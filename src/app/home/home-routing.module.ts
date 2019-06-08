import { FirebaseService } from './../services/firebase.service';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    FirebaseService
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
