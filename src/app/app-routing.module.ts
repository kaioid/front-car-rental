import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarCreateComponent } from './car-create/car-create.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarUpdateComponent } from './car-update/car-update.component';


const routes: Routes = [
  { path: '', redirectTo: 'vehicles', pathMatch: 'full'},
  { path: 'vehicles', component: CarListComponent },
  { path: 'add', component: CarCreateComponent },
  { path: 'update/:id', component: CarUpdateComponent },
  { path: 'details/:id', component: CarDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
