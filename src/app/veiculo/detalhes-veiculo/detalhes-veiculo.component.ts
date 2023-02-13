import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { HttpCrudService } from 'src/app/shared/http-crud.service';

@Component({
  selector: 'app-detalhes-veiculo',
  templateUrl: './detalhes-veiculo.component.html',
  styleUrls: ['./detalhes-veiculo.component.css']
})
export class DetalhesVeiculoComponent implements OnInit {

  id: number;
  veiculo: any;
  role: string;

  constructor(private crudService: HttpCrudService, private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.role =this.authService.getUsuarioTipo();
    this.id = this.route.snapshot.params['id'];
    console.log(this.role)
    this.veiculo = this.crudService.get(this.id, 'veiculos')
    .subscribe(veiculo=>this.veiculo=veiculo);
  }

  delete(){
    this.crudService.delete(this.id, 'veiculos').subscribe();
    this.goToList();
  }

  update(){
    this.router.navigate([`veiculos/update/${this.id}`]);
  }

  goToList(){
    this.router.navigate(['veiculos']);
  }

}
