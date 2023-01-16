import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vehicle } from '../../models/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  vehicles: Observable<Vehicle[]>;
  show = false;
  constructor(private carService: CarService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.vehicles=this.carService.getCarList();
  }

  carDetails(id: number){
    this.router.navigate(['vehicles/', id]);
  }

  listMode(){
    this.show=true;
  }

  cardMode(){
    this.show=false
  }

}
