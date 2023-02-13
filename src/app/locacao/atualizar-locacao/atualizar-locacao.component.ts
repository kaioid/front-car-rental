import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpCrudService } from 'src/app/shared/http-crud.service';

@Component({
  selector: 'app-atualizar-locacao',
  templateUrl: './atualizar-locacao.component.html',
  styleUrls: ['./atualizar-locacao.component.css']
})
export class AtualizarLocacaoComponent implements OnInit {

  atualizarLocacaoForm: FormGroup;
  id: number;
  locacao: any;

  constructor(private formBuilder: FormBuilder, private crudService: HttpCrudService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.locacao = this.crudService.get(this.id, 'locacoes').subscribe(locacao=>this.locacao=locacao)
    this.atualizarLocacaoForm = this.formBuilder.group({
      dataInicio: [this.locacao.dataInicio],
      dataFim: [this.locacao.dataFim],
      veiculo: [this.locacao.veiculo],
      cliente: [this.locacao.cliente]
    })
  }

  onSubmit(){

  }

  dateFormat(){
    const dataInicio = new Date(this.atualizarLocacaoForm.get('dataInicio').value);
    const dataFim = new Date(this.atualizarLocacaoForm.get('dataFim').value);
    
    const dataInicioFormat = new Intl.DateTimeFormat('pt-br', {day:'2-digit', month:'2-digit', year:'numeric', hour: 'numeric', minute: 'numeric'}).format(dataInicio);
    const dataFimFormat = Intl.DateTimeFormat('pt-br', {day:'2-digit', month:'2-digit', year:'numeric', hour: 'numeric', minute: 'numeric'}).format(dataFim);

    this.atualizarLocacaoForm.patchValue({
      dataInicio: dataInicioFormat,
      dataFim: dataFimFormat
    })
  }

}
