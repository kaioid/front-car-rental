import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from '../../../model/veiculo';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  veiculo: Veiculo = new Veiculo();
  submitted = false;
  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit() {
  }

  newCar(): void{
    this.submitted = false;
    this.veiculo = new Veiculo;
  }

  save() {
    this.crudService.create(this.veiculo, 'veiculos').subscribe(data=>console.log(data), error => console.log(error));
    this.veiculo = new Veiculo();
    this.gotoList();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/veiculos'])
  }

}
