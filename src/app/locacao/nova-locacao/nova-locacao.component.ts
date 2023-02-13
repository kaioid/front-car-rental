import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpCrudService } from 'src/app/shared/http-crud.service';

@Component({
  selector: 'app-nova-locacao',
  templateUrl: './nova-locacao.component.html',
  styleUrls: ['./nova-locacao.component.css']
})
export class NovaLocacaoComponent implements OnInit {

  novaLocacaoForm: FormGroup;
  clienteDropdown: Observable<Object[]>;
  veiculoDropdown: Observable<Object[]>;

  constructor(private formBuilder: FormBuilder, private crudService: HttpCrudService) { }

  ngOnInit(){
    this.clienteDropdown = this.crudService.getList('clientes');
    this.veiculoDropdown = this.crudService.getList('veiculos');
    this.novaLocacaoForm = this.formBuilder.group({
      dataInicio: [null],
      dataFim: [null],
      cliente: [null],
      vendedor: JSON.parse(localStorage.getItem("vendedor_id")),
      veiculo: [null],
      dataDevolucao: [null],
      status: [0],
      fatura: [null],
      nomeCliente: [null],
      nomeVendedor: [null]
    })
  }

  save(){
    this.crudService.create(this.novaLocacaoForm.value, 'locacoes')
    .subscribe(locacao=>{})
  }

  onSubmit(){
    this.save();
  }

  dateFormat(){
    const dataInicio = new Date(this.novaLocacaoForm.get('dataInicio').value);
    const dataFim = new Date(this.novaLocacaoForm.get('dataFim').value);
    
    const dataInicioFormat = new Intl.DateTimeFormat('pt-br', {day:'2-digit', month:'2-digit', year:'numeric', hour: 'numeric', minute: 'numeric'}).format(dataInicio);
    const dataFimFormat = Intl.DateTimeFormat('pt-br', {day:'2-digit', month:'2-digit', year:'numeric', hour: 'numeric', minute: 'numeric'}).format(dataFim);

    this.novaLocacaoForm.patchValue({
      dataInicio: dataInicioFormat,
      dataFim: dataFimFormat
    })
  }

}
