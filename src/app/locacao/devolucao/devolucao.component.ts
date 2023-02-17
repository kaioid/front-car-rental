import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpCrudService } from 'src/app/shared/http-crud.service';

@Component({
  selector: 'app-devolucao',
  templateUrl: './devolucao.component.html',
  styleUrls: ['./devolucao.component.css']
})
export class DevolucaoComponent implements OnInit {

  id: number;
  veiculoId: number;
  vendedorId: number;
  locacao: any;
  veiculo: any
  devolucaoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private crudService: HttpCrudService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.locacao = this.crudService.get(this.id, 'locacoes').subscribe(locacao=>{
      this.locacao = locacao;
      this.veiculoId = locacao['veiculo']


      this.crudService.get(this.veiculoId, 'veiculos').subscribe(veiculo=>this.veiculo = veiculo)

      this.devolucaoForm = this.formBuilder.group({
        dataInicio: this.locacao['dataInicio'],
        dataFim: this.locacao['dataFim'],
        vendedor: JSON.parse(localStorage.getItem("vendedor_id")),
        veiculo: this.locacao['veiculo'],
        cliente: this.locacao['cliente'],
        status: 0,
        nomeCliente: this.locacao['nomeCliente'],
        nomeVendedor: this.locacao['nomeVendedor']
      })
      console.log(this.devolucaoForm.value)
    })
  }

  devolver(){
    this.crudService.update(this.id, this.devolucaoForm.value, 'locacoes').subscribe(data=>{})
    this.gotoList();
  }

  setStatus(){
    this.devolucaoForm.patchValue({
      status: 2
    })
  }

  gotoList(){
    this.router.navigate(['locacoes'])
  }

}
