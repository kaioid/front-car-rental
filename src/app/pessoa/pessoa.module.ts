import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { AtualizarClienteComponent } from './cliente/atualizar-cliente/atualizar-cliente.component';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { NovoClienteComponent } from './cliente/novo-cliente/novo-cliente.component';
import { NovoVendedorComponent } from './vendedor/novo-vendedor/novo-vendedor.component';
import { ListaVendedorComponent } from './vendedor/lista-vendedor/lista-vendedor.component';
import { AtualizarVendedorComponent } from './vendedor/atualizar-vendedor/atualizar-vendedor.component';
import { NgxPaginationModule } from 'ngx-pagination';


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [NovoClienteComponent, AtualizarClienteComponent, ListaClienteComponent, NovoVendedorComponent, ListaVendedorComponent, AtualizarVendedorComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    NgxPaginationModule
  ],
  exports: [
    NovoClienteComponent,
    AtualizarClienteComponent,
    ListaClienteComponent,
    ReactiveFormsModule,
    NovoVendedorComponent,
    AtualizarVendedorComponent,
    ListaVendedorComponent
  ]
})
export class PessoaModule { }
