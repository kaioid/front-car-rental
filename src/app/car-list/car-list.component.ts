import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vehicle } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  vehicles: Observable<Vehicle[]>;
  constructor(private carService: CarService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.vehicles=this.carService.getCarList();
  }

  deleteCar(id: number){
    this.carService.deleteCar(id).subscribe(data=>{
      console.log(data)
      this.reloadData();
    },
    error => console.log(error));
  }

  carDetails(id: number){
    this.router.navigate(['vehicles/', id]);
  }

  updateCar(id: number){
    this.router.navigate(['vehicles/update', id]);
  }

}
