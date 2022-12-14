import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Observable<Client[]>;

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.clients = this.clientService.getClientList();
  }

  deleteClient(id: number){
    this.clientService.deleteClient(id).subscribe(data=>{
      console.log(data)
      this.reloadData();
    },
    error => console.log(error));
  }

  clientDetails(id: number){
    this.router.navigate(['clients/', id]);
  }

  updateClient(id: number){
    this.router.navigate(['clients/update', id])
  }

}
