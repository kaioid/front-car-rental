import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../../models/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  id: number;
  vehicle: Vehicle;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private carService: CarService) { }

  ngOnInit(){
    this.vehicle = new Vehicle();
    this.id = this.route.snapshot.params['id'];
    this.carService.getCar(this.id).subscribe(data =>{
      console.log(data);
      this.vehicle = data;
    },
    error => console.log(error));
  }

  carUpdate(){
    this.carService.updateCar(this.id, this.vehicle).subscribe(data => console.log(data), error => console.log(error));
    this.vehicle = new Vehicle();
    this.gotoList();
  }

  onSubmit(){
    this.carUpdate();
  }

  gotoList(){
    this.router.navigate(['/vehicles'])
  }

}
