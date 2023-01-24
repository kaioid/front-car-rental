import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CepService } from 'src/app/service/cep.service';
import { CrudService } from 'src/app/service/crud.service';
import { Cliente } from '../../../model/cliente';


@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  id: number;
  cliente: Cliente;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private crudService: CrudService, private cepService: CepService) { }

  ngOnInit(){
    this.cliente = new Cliente();
    this.id = this.route.snapshot.params['id'];
    this.crudService.get(this.id, 'clientes').subscribe(data =>{
      this.cliente = data;
    },
    error => console.log(error));
  }

  clientUpdate(){
    this.crudService.update(this.id, 'clientes', this.cliente).subscribe(data=> {}, error => console.log(error));
    this.cliente = new Cliente();
    this.gotoList();
  }
  
  onSubmit(usuarioForm){
    this.clientUpdate();
  }

  gotoList(){
    this.router.navigate(['/clientes'])
  }

  consultaCEP(cep, form) {
    cep = cep.replace(/\D/g, '');

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
      .subscribe(dados => this.populaDados(dados, form));
    }
  }

  populaDados(dados: any, formulario){
    formulario.form.patchValue({
      logradouro: dados.logradouro,
      complemento: dados.complemento,
      numero: dados.numero,
      bairro: dados.bairro,
      localidade: dados.localidade,
      uf: dados.uf
    });
  }
}
