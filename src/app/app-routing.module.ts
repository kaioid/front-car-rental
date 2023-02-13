import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PdfFaturaComponent } from './fatura/pdf-fatura/pdf-fatura.component';
import { DevolucaoComponent } from './locacao/devolucao/devolucao.component';
import { ListaLocacaoComponent } from './locacao/lista-locacao/lista-locacao.component';
import { NovaLocacaoComponent } from './locacao/nova-locacao/nova-locacao.component';
import { AtualizarClienteComponent } from './pessoa/cliente/atualizar-cliente/atualizar-cliente.component';
import { ListaClienteComponent } from './pessoa/cliente/lista-cliente/lista-cliente.component';
import { NovoClienteComponent } from './pessoa/cliente/novo-cliente/novo-cliente.component';
import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './shared/login/login.component';
import { AtualizarVeiculoComponent } from './veiculo/atualizar-veiculo/atualizar-veiculo.component';
import { ListaVeiculoComponent } from './veiculo/lista-veiculo/lista-veiculo.component';
import { NovoVeiculoComponent } from './veiculo/novo-veiculo/novo-veiculo.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', children: [
    { path: 'veiculos', component: ListaVeiculoComponent },
    { path: 'veiculos/add', component: NovoVeiculoComponent },
    { path: 'veiculos/update/:id', component: AtualizarVeiculoComponent },
    { path: 'clientes', component: ListaClienteComponent },
    { path: 'clientes/add', component: NovoClienteComponent },
    { path: 'clientes/update/:id', component: AtualizarClienteComponent },
    { path: 'locacoes', component: ListaLocacaoComponent },
    { path: 'locacoes/add', component: NovaLocacaoComponent},
    { path: 'devolver/:id', component: DevolucaoComponent },
    { path: 'locacoes/:id/fatura', component: PdfFaturaComponent }

  ], canActivate : [AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
