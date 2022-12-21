import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarCreateComponent } from './components/car-create/car-create.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { ClientCreateComponent } from './components/client-create/client-create.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientUpdateComponent } from './components/client-update/client-update.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { RentalCreateComponent } from './components/rental-create/rental-create.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';
import { RentalUpdateComponent } from './components/rental-update/rental-update.component';


const routes: Routes = [

  { path: 'vehicles', component: CarListComponent },
  { path: 'vehicles/add', component: CarCreateComponent },
  { path: 'vehicles/update/:id', component: CarUpdateComponent },
  { path: 'vehicles/:id', component: CarDetailsComponent },
  { path: 'clients', component: ClientListComponent },
  { path: 'clients/add', component: ClientCreateComponent },
  { path: 'clients/update/:id', component: ClientUpdateComponent },
  { path: 'clients/:id', component: ClientDetailsComponent },
  { path: 'car-rentals', component: RentalListComponent },
  { path: 'car-rentals/add', component: RentalCreateComponent},
  { path: 'car-rentals/update/:id', component: RentalUpdateComponent },
  { path: 'invoices', component: InvoiceListComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
