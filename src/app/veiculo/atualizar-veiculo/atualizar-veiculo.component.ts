import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpCrudService } from 'src/app/shared/http-crud.service';

@Component({
  selector: 'app-atualizar-veiculo',
  templateUrl: './atualizar-veiculo.component.html',
  styleUrls: ['./atualizar-veiculo.component.css']
})
export class AtualizarVeiculoComponent implements OnInit {

  atualizarVeiculoForm: FormGroup;
  id: number;
  veiculo: any;

  constructor(private crudService: HttpCrudService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.veiculo = this.crudService.get(this.id, 'veiculos')
    .subscribe(veiculo=>{
      this.veiculo = veiculo;
    })
    this.atualizarVeiculoForm = this.formBuilder.group({
      modelo: [this.veiculo.modelo],
      categoria: [this.veiculo.categoria],
      precoPorDia: [this.veiculo.precoPorDia],
      precoPorHora: [this.veiculo.precoPorHora]
    })
  }

  atualizar(){
    this.veiculoUpdate();
  }

  veiculoUpdate(){
    this.crudService.update(this.id, this.veiculo, 'veiculos')
    .subscribe(veiculo=>{})
  }

}
