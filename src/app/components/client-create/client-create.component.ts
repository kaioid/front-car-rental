import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = new Client;
  submitted = false;

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
  }

  newClient(): void{
    this.submitted = false;
    this.client = new Client;
  }

  save(){
    this.clientService.createClient(this.client).subscribe(data=>console.log(data), error => console.log(error));
    this.client = new Client();
    this.gotoList();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/clients'])
  }

}
