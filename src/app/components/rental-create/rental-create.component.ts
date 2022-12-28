import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/models/car';
import { Client } from 'src/app/models/client';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { ClientService } from 'src/app/services/client.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-create',
  templateUrl: './rental-create.component.html',
  styleUrls: ['./rental-create.component.css']
})
export class RentalCreateComponent implements OnInit {

  clients: Observable<Client[]>;
  vehicles: Observable<Vehicle[]>;

  rental: Rental = new Rental();
  submitted = false;
  constructor(private rentalService: RentalService, private clientService: ClientService,private carService: CarService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.clients = this.clientService.getClientList();
    this.vehicles = this.carService.getCarList();
  }

  newRental(): void {
    this.submitted = false;
    this.rental = new Rental;
  }

  save() {
    this.rentalService.createRental(this.rental).subscribe(data=>console.log(data), error => console.log(error));
    this.rental = new Rental();
    this.gotoList();
  }

  onSubmit(rf){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/rentals'])
  }

  fieldFormat(rf){
    let aux = rf.value
    rf.form.patchValue({
      client: {
        "id": aux.client
      },
      vehicle: {
        "id": aux.vehicle
      }
    })
  }

  dateFormat(rf){
    let aux = rf.value
    let data1 = new Date(aux.start)
    let data2 = new Date(aux.finish)

    let formatStart = new Intl.DateTimeFormat('pt-br', {day:'2-digit', month:'2-digit', year:'numeric', hour: 'numeric', minute: 'numeric'}).format(data1)
    let formatFinish = new Intl.DateTimeFormat('pt-br', {day:'2-digit', month:'2-digit', year:'numeric', hour: 'numeric', minute: 'numeric'}).format(data2)

    rf.form.patchValue({
      start: formatStart,
      finish: formatFinish
    })
    
  }

}
