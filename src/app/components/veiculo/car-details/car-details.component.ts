import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { Veiculo } from '../../../model/veiculo';


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  id: number;
  veiculo: Veiculo;

  constructor(private route: ActivatedRoute, private router: Router, private crudService: CrudService) { }

  ngOnInit() {
    this.veiculo = new Veiculo();
    this.id = this.route.snapshot.params['id'];
    this.crudService.get(this.id, 'veiculos').subscribe(data=> {
      console.log(data);
      this.veiculo = data;
    },
    error => console.log(error))
  }

  list(){
    this.router.navigate(['veiculos']);
  }

  updateCar(id: number){
    this.router.navigate(['veiculos/update', id]);
  }

  deleteCar(id: number){
    this.crudService.delete(id,'veiculos').subscribe(data=>{
      console.log(data)
      this.list();
    },
    error => console.log(error));
  }

}
