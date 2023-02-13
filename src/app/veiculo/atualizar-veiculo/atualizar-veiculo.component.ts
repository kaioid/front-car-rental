import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private crudService: HttpCrudService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.veiculo = this.crudService.get(this.id, 'veiculos')
    .subscribe(veiculo=>{
      this.veiculo = veiculo;
      this.atualizarVeiculoForm = this.formBuilder.group({
        modelo: [this.veiculo['modelo']],
        categoria: [this.veiculo['categoria']],
        precoPorDia: [this.veiculo['precoPorDia']],
        precoPorHora: [this.veiculo['precoPorHora']]
      })
    })

  }

  atualizar(){
    this.veiculoUpdate();
    this.goToList();
  }

  veiculoUpdate(){
    this.crudService.update(this.id, this.atualizarVeiculoForm.value, 'veiculos')
    .subscribe(veiculo=>{})
  }

  goToList(){
    this.router.navigate(['veiculos'])
  }

}
