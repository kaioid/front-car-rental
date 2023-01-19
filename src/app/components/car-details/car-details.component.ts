import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../../models/vehicle';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  id: number;
  vehicle: Vehicle;

  constructor(private route: ActivatedRoute, private router: Router, private carService: CarService) { }

  ngOnInit() {
    this.vehicle = new Vehicle();
    this.id = this.route.snapshot.params['id'];
    this.carService.getCar(this.id).subscribe(data=> {
      console.log(data);
      this.vehicle = data;
    },
    error => console.log(error))
  }

  list(){
    this.router.navigate(['vehicles']);
  }

  updateCar(id: number){
    this.router.navigate(['vehicles/update', id]);
  }

  deleteCar(id: number){
    this.carService.deleteCar(id).subscribe(data=>{
      console.log(data)
      this.list();
    },
    error => console.log(error));
  }

}
