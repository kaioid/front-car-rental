import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Veiculo } from 'src/app/model/veiculo';
import { Cliente } from 'src/app/model/cliente';
import { Locacao } from 'src/app/model/locacao';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-rental-create',
  templateUrl: './rental-create.component.html',
  styleUrls: ['./rental-create.component.css']
})
export class RentalCreateComponent implements OnInit {

  clientes: Observable<Cliente[]>;
  veiculos: Observable<Veiculo[]>;

  locacao: Locacao = new Locacao();
  submitted = false;
  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.clientes = this.crudService.getList('clientes');
    this.veiculos = this.crudService.getList('veiculos');
  }

  newRental(): void {
    this.submitted = false;
    this.locacao = new Locacao;
  }

  save() {
    this.crudService.create(this.locacao, 'locacoes').subscribe(data=>console.log(data), error => console.log(error));
    this.locacao = new Locacao();
    this.gotoList();
  }

  onSubmit(rf){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/locacoes'])
  }

  fieldFormat(rf){
    let aux = rf.value
    rf.form.patchValue({
      cliente: {
        "id": aux.cliente
      },
      veiculo: {
        "id": aux.veiculo
      }
    })
  }

  dateFormat(rf){
    let aux = rf.value
    let data1 = new Date(aux.dataInicio)
    let data2 = new Date(aux.dataFim)

    let formatStart = new Intl.DateTimeFormat('pt-br', {day:'2-digit', month:'2-digit', year:'numeric', hour: 'numeric', minute: 'numeric'}).format(data1)
    let formatFinish = new Intl.DateTimeFormat('pt-br', {day:'2-digit', month:'2-digit', year:'numeric', hour: 'numeric', minute: 'numeric'}).format(data2)

    rf.form.patchValue({
      dataInicio: formatStart,
      dataFim: formatFinish
    })
    
  }

}
