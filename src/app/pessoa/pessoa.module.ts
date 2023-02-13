import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { AtualizarClienteComponent } from './cliente/atualizar-cliente/atualizar-cliente.component';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { NovoClienteComponent } from './cliente/novo-cliente/novo-cliente.component';


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [NovoClienteComponent, AtualizarClienteComponent, ListaClienteComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  exports: [
    NovoClienteComponent,
    AtualizarClienteComponent,
    ListaClienteComponent,
    ReactiveFormsModule
  ]
})
export class PessoaModule { }
