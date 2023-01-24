import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { Veiculo } from '../../../model/veiculo';


@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  id: number;
  veiculo: Veiculo;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private crudService: CrudService) { }

  ngOnInit(){
    this.veiculo = new Veiculo();
    this.id = this.route.snapshot.params['id'];
    this.crudService.get(this.id, 'veiculos').subscribe(data =>{
      this.veiculo = data;
    },
    error => console.log(error));
  }

  carUpdate(){
    this.crudService.update(this.id, 'veiculos', this.veiculo).subscribe(data => {}, error => console.log(error));
    this.veiculo = new Veiculo();
    this.gotoList();
  }

  onSubmit(){
    this.carUpdate();
  }

  gotoList(){
    this.router.navigate(['/veiculos'])
  }

}
