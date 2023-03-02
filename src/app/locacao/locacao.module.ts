import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovaLocacaoComponent } from './nova-locacao/nova-locacao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaLocacaoComponent } from './lista-locacao/lista-locacao.component';
import { AtualizarLocacaoComponent } from './atualizar-locacao/atualizar-locacao.component';
import { DevolucaoComponent } from './devolucao/devolucao.component';




@NgModule({
  declarations: [NovaLocacaoComponent, ListaLocacaoComponent, AtualizarLocacaoComponent, DevolucaoComponent,],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    NovaLocacaoComponent,
    ReactiveFormsModule
  ]
})
export class LocacaoModule { }
