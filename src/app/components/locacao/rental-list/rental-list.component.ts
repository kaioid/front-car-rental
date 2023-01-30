import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Locacao } from 'src/app/model/locacao'; 
import { Veiculo } from 'src/app/model/veiculo';
import { Vendedor } from 'src/app/model/vendedor';
import { CrudService } from 'src/app/service/crud.service';


@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  abertas: Observable<Locacao[]>;
  fechadas: Observable<Locacao[]>;
  veiculos: Observable<Veiculo[]>;
  vendedores: Observable<Vendedor[]>;

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.abertas = this.crudService.getList('locacoes/abertos');
    this.fechadas = this.crudService.getList('locacoes/fechados');
    this.veiculos = this.crudService.getList('veiculos');
    this.vendedores = this.crudService.getList('vendedores');
  }

  deleteRental(id: number){
    this.crudService.delete(id, 'locacoes').subscribe(data=>{
      console.log(data)
      this.reloadData();
    },
    error => console.log(error));
  }

  updateRental(id: number){
    this.router.navigate(['locacoes/update', id]);
  }

}
