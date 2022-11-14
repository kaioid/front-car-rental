import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  id: number;
  client: Client;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private clientService: ClientService) { }

  ngOnInit(){
    this.client = new Client();
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe(data =>{
      console.log(data);
      this.client = data;
    },
    error => console.log(error));
  }

  clientUpdate(){
    this.clientService.updateClient(this.id, this.client).subscribe(data=> console.log(data), error => console.log(error));
    this.client = new Client();
    this.gotoList();
  }
  
  onSubmit(){
    this.clientUpdate();
  }

  gotoList(){
    this.router.navigate(['/clients'])
  }

}
