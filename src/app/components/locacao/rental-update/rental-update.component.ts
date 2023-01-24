import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Locacao } from 'src/app/model/locacao';
import { Veiculo } from 'src/app/model/veiculo';
import { CrudService } from 'src/app/service/crud.service';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-rental-update',
  templateUrl: './rental-update.component.html',
  styleUrls: ['./rental-update.component.css']
})
export class RentalUpdateComponent implements OnInit {

  id: number;
  veiculoId: number;
  locacao: Locacao;
  veiculo: Veiculo; 
  vendedorId: number;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService, private crudService: CrudService) { }

  ngOnInit(){
    this.locacao = new Locacao();
    this.veiculo = new Veiculo();
    this.vendedorId = this.loginService.vendedorId;

    this.id = this.route.snapshot.params['id'];
    this.crudService.get(this.id, 'locacoes').subscribe(data =>{
      this.locacao = data;
      this.veiculoId = this.locacao['veiculo']
      
      this.crudService.get(this.veiculoId, 'veiculos').subscribe(data =>{
      this.veiculo = data;
    })
    },
    error => console.log(error));
  }

  rentalUpdate(){
    this.crudService.update(this.id, 'locacoes',this.locacao).subscribe(data => console.log(data), error => console.log(error));
  }

  onSubmit(f){
    this.rentalUpdate();
    this.gotoList();
  }

  gotoList(){
    this.router.navigate([`/locacoes/`])
  }

  setStatus(formulario){
    formulario.form.patchValue({
      status: 2
    })
  }

}
