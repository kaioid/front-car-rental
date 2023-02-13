import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpCrudService } from 'src/app/shared/http-crud.service';

@Component({
  selector: 'app-novo-veiculo',
  templateUrl: './novo-veiculo.component.html',
  styleUrls: ['./novo-veiculo.component.css']
})
export class NovoVeiculoComponent implements OnInit {

  novoVeiculoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private crudService: HttpCrudService, private router: Router) { }

  ngOnInit(){
    this.novoVeiculoForm = this.formBuilder.group({
      modelo: [null],
      categoria: [null],
      precoPorDia: [null],
      precoPorHora: [null]
    })
  }

  save(){
    this.crudService.create(this.novoVeiculoForm.value, 'veiculos')
    .subscribe(veiculo=>{console.log(veiculo)}, error=>console.error('alguma coisa errada'))
  }

  onSubmit(){
    this.save();
    this.goToList();
  }

  goToList(){
    this.router.navigate(['veiculos'])
  }

}
