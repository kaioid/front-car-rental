import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarCreateComponent } from './car-create/car-create.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarUpdateComponent } from './car-update/car-update.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientUpdateComponent } from './client-update/client-update.component';


const routes: Routes = [

  { path: 'vehicles', component: CarListComponent },
  { path: 'vehicles/add', component: CarCreateComponent },
  { path: 'vehicles/update/:id', component: CarUpdateComponent },
  { path: 'vehicles/:id', component: CarDetailsComponent },
  { path: 'clients', component: ClientListComponent },
  { path: 'clients/add', component: ClientCreateComponent },
  { path: 'clients/update/:id', component: ClientUpdateComponent },
  { path: 'clients/:id', component: ClientDetailsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
