import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Locacao } from 'src/app/model/locacao';
import { Veiculo } from 'src/app/model/veiculo';
import { CrudService } from 'src/app/service/crud.service';


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
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private crudService: CrudService) { }

  ngOnInit(){
    this.locacao = new Locacao();
    this.veiculo = new Veiculo();
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

  reloadData(){
    
  }


  rentalUpdate(){
    this.crudService.update(this.id, 'locacoes',this.locacao).subscribe(data => console.log(data), error => console.log(error));
  }

  onSubmit(f){
    this.rentalUpdate();
    this.gotoList();
  }

  dateFormat(f){
    let aux = f.value
    let data = new Date(aux.dataRetorno)

    let formatReturn = new Intl.DateTimeFormat('pt-br', {day:'2-digit', month:'2-digit', year:'numeric', hour: 'numeric', minute: 'numeric'}).format(data)

    f.form.patchValue({
      dataRetorno: formatReturn 
    })
  
  }

  gotoList(){
    this.router.navigate([`/locacoes/`])
  }

}
