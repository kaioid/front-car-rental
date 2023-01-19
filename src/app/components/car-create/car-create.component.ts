import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../../models/vehicle';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  vehicle: Vehicle = new Vehicle();
  submitted = false;
  constructor(private carService: CarService, private router: Router) { }

  ngOnInit() {
  }

  newCar(): void{
    this.submitted = false;
    this.vehicle = new Vehicle;
  }

  save() {
    this.carService.createCar(this.vehicle).subscribe(data=>console.log(data), error => console.log(error));
    this.vehicle = new Vehicle();
    this.gotoList();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/vehicles'])
  }

}
