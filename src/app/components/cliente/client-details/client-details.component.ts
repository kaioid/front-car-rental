import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { Cliente } from 'src/app/model/cliente'; 


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id: number;
  cliente: Cliente;

  constructor(private route: ActivatedRoute, private router: Router, private crudService: CrudService) { }

  ngOnInit(){
    this.cliente = new Cliente();
    this.id = this.route.snapshot.params['id'];
    this.crudService.get(this.id, 'clientes').subscribe(data=> {
      console.log(data);
      this.cliente = data;
    },
    error => console.log(error))
  }

  list(){
    this.router.navigate(['clientes'])
  }

}
