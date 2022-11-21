import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarCreateComponent } from './components/car-create/car-create.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { ClientCreateComponent } from './components/client-create/client-create.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientUpdateComponent } from './components/client-update/client-update.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';
import { RentalCreateComponent } from './components/rental-create/rental-create.component';
import { RentalUpdateComponent } from './components/rental-update/rental-update.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarCreateComponent,
    CarUpdateComponent,
    CarDetailsComponent,
    ClientCreateComponent,
    ClientUpdateComponent,
    ClientDetailsComponent,
    ClientListComponent,
    RentalListComponent,
    RentalCreateComponent,
    RentalUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
