import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarCreateComponent } from './components/veiculo/car-create/car-create.component';
import { CarDetailsComponent } from './components/veiculo/car-details/car-details.component';
import { CarListComponent } from './components/veiculo/car-list/car-list.component';
import { CarUpdateComponent } from './components/veiculo/car-update/car-update.component';
import { ClientCreateComponent } from './components/cliente/client-create/client-create.component';
import { ClientDetailsComponent } from './components/cliente/client-details/client-details.component';
import { ClientListComponent } from './components/cliente/client-list/client-list.component';
import { ClientUpdateComponent } from './components/cliente/client-update/client-update.component';
import { InvoicePDFComponent } from './components/invoice-pdf/invoice-pdf.component';
import { LoginComponent } from './components/login/login.component';
import { RentalCreateComponent } from './components/locacao/rental-create/rental-create.component';
import { RentalListComponent } from './components/locacao/rental-list/rental-list.component';
import { RentalUpdateComponent } from './components/locacao/rental-update/rental-update.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', children: [
    { path: 'veiculos', component: CarListComponent },
    { path: 'veiculos/add', component: CarCreateComponent },
    { path: 'veiculos/update/:id', component: CarUpdateComponent },
    { path: 'veiculos/:id', component: CarDetailsComponent },
    { path: 'clientes', component: ClientListComponent },
    { path: 'clientes/add', component: ClientCreateComponent },
    { path: 'clientes/update/:id', component: ClientUpdateComponent },
    { path: 'clientes/:id', component: ClientDetailsComponent },
    { path: 'locacoes', component: RentalListComponent },
    { path: 'locacoes/add', component: RentalCreateComponent},
    { path: 'locacoes/update/:id', component: RentalUpdateComponent },
    { path: 'faturas/:id', component: InvoicePDFComponent }
  ], canActivate : [AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
