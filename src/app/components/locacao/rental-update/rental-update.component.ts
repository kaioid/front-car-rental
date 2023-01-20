import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Locacao } from 'src/app/model/locacao';
import { CrudService } from 'src/app/service/crud.service';


@Component({
  selector: 'app-rental-update',
  templateUrl: './rental-update.component.html',
  styleUrls: ['./rental-update.component.css']
})
export class RentalUpdateComponent implements OnInit {

  locacoes: Observable<Locacao[]>;
  id: number;
  locacao: Locacao;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private crudService: CrudService) { }

  ngOnInit(){
    this.reloadData();
    this.locacao = new Locacao();
    this.id = this.route.snapshot.params['id'];
    this.crudService.get(this.id, 'locacoes').subscribe(data =>{
      console.log(data);
      this.locacao = data;
    },
    error => console.log(error));
  }

  reloadData(){
    this.locacoes = this.crudService.getList('locacoes/abertas');
  }


  rentalUpdate(){
    this.crudService.update(this.id, 'locacoes',this.locacao).subscribe(data => console.log(data), error => console.log(error));
  }

  onSubmit(f){
    this.rentalUpdate();
    this.gotoList();
  }

  dateFormat(f){
    let aux = f.value
    let data = new Date(aux.dataRetorno)

    let formatReturn = new Intl.DateTimeFormat('pt-br', {day:'2-digit', month:'2-digit', year:'numeric', hour: 'numeric', minute: 'numeric'}).format(data)

    f.form.patchValue({
      dataRetorno: formatReturn 
    })
  
  }

  gotoList(){
    this.router.navigate([`/locacoes/`])
  }

}
