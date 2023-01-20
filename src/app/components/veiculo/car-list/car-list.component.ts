import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/service/crud.service';
import { Veiculo } from '../../../model/veiculo';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  veiculos: Observable<Veiculo[]>;
  show = false;
  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.veiculos=this.crudService.getList('veiculos');
  }

  carDetails(id: number){
    this.router.navigate(['veiculos/', id]);
  }

  listMode(){
    this.show=true;
  }

  cardMode(){
    this.show=false
  }

}
