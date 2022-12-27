import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Vehicle } from 'src/app/models/car';
import { Client } from 'src/app/models/client';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { ClientService } from 'src/app/services/client.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-update',
  templateUrl: './rental-update.component.html',
  styleUrls: ['./rental-update.component.css']
})
export class RentalUpdateComponent implements OnInit {

  rentals: Observable<Rental[]>;
  id: number;
  rental: Rental;
  submitted = false;

  constructor(private route: ActivatedRoute, private clientService: ClientService,private carService: CarService, private router: Router, private rentalService: RentalService) { }

  ngOnInit(){
    this.reloadData();
    this.rental = new Rental();
    this.id = this.route.snapshot.params['id'];
    this.rentalService.getRental(this.id).subscribe(data =>{
      console.log(data);
      this.rental = data;
    },
    error => console.log(error));
  }

  reloadData(){
    this.rentals = this.rentalService.getRentalList();
  }


  rentalUpdate(){
    this.rentalService.updateRental(this.id, this.rental).subscribe(data => console.log(data), error => console.log(error));
  }

  onSubmit(f){
    this.rentalUpdate();
  }

  dateFormat(f){
    let aux = f.value
    let data = new Date(aux.dateReturn)

    let formatReturn = new Intl.DateTimeFormat('pt-br', {day:'2-digit', month:'2-digit', year:'numeric', hour: 'numeric', minute: 'numeric'}).format(data)

    f.form.patchValue({
      dateReturn: formatReturn 
    })
  
  }

  gotoInvoice(id){
    this.router.navigate([`/invoices/`])
  }

}
