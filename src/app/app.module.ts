import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarCreateComponent } from './components/veiculo/car-create/car-create.component';
import { CarDetailsComponent } from './components/veiculo/car-details/car-details.component';
import { CarListComponent } from './components/veiculo/car-list/car-list.component';
import { CarUpdateComponent } from './components/veiculo/car-update/car-update.component';
import { ClientCreateComponent } from './components/cliente/client-create/client-create.component';
import { ClientDetailsComponent } from './components/cliente/client-details/client-details.component';
import { ClientListComponent } from './components/cliente/client-list/client-list.component';
import { ClientUpdateComponent } from './components/cliente/client-update/client-update.component';
import { RentalListComponent } from './components/locacao/rental-list/rental-list.component';
import { RentalCreateComponent } from './components/locacao/rental-create/rental-create.component';
import { RentalUpdateComponent } from './components/locacao/rental-update/rental-update.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { InvoicePDFComponent } from './components/fatura-pdf/invoice-pdf.component';
import { LoginComponent } from './components/login/login.component'
import { TokenInterceptor } from './token.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

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
    RentalUpdateComponent,
    InvoicePDFComponent,
    LoginComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(maskConfig),
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
