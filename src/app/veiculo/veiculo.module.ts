import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { AtualizarVeiculoComponent } from './atualizar-veiculo/atualizar-veiculo.component';
import { ListaVeiculoComponent } from './lista-veiculo/lista-veiculo.component';
import { NovoVeiculoComponent } from './novo-veiculo/novo-veiculo.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [NovoVeiculoComponent, AtualizarVeiculoComponent, ListaVeiculoComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule
  ],
  exports: [
    NovoVeiculoComponent,
    AtualizarVeiculoComponent,
    ListaVeiculoComponent,
    ReactiveFormsModule
  ]
})
export class VeiculoModule { }
