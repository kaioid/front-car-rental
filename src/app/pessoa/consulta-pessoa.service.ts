import { Injectable } from '@angular/core';
import { HttpCrudService } from '../shared/http-crud.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultaPessoaService {

  constructor(private crudService: HttpCrudService) { }

  
  getClienteQuery(endpoint: string, param: string){
    const query = []
    this.crudService.getList(endpoint)
    .subscribe(data=>{
      for(let obj of data){
        if(obj['cpf']==param || obj['nome'].toUpperCase()==param || obj['nome'].toUpperCase().startsWith(param) ){
          query.push(obj)
        }
      }
    })
    return query;
  }
}
