import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AppConstants } from '../app-constants';
import { HttpCrudService } from './http-crud.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper: JwtHelperService = new JwtHelperService();
  usuarios: any;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router, private crudService: HttpCrudService) { }

  login(usuario){
    return this.http.post<any>(AppConstants.baseLogin, JSON.stringify(usuario), {observe: 'response'})
    .subscribe(data=>{
      let access_token = JSON.stringify(data.headers.get("authorization"));
      localStorage.setItem("access_token", access_token);
      this.getUsuarioId();
      this.router.navigate(['veiculos']);  
  });
  }

  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('vendedor_id');
    localStorage.removeItem('perfil');
  }

  getUsuarioLogado(){
    const token = this.getToken();
    if(token){
      const usuario = this.jwtHelper.decodeToken(token).sub
      return usuario;
    }
    return null;
  }

  getUsuarioId() {
    this.usuarios = this.crudService.getList('vendedores').subscribe(data=>{
      for(let usuario of data){
        if(usuario['email']==this.getUsuarioLogado()){
          localStorage.setItem("vendedor_id", usuario['id']);
          localStorage.setItem("perfil", usuario['perfis']);
        }
      }
    })
  }

  getUsuarioTipo(){
    let perfis = localStorage.getItem("perfil");
    let array_perfis = perfis.split(',');
    
    if(array_perfis.length>1){
      return 'ADMIN';
    }
    else{
      return array_perfis[0];
    }
  }

  getToken(){
    const tokenString = localStorage.getItem("access_token");
    if(tokenString){
      const token = JSON.parse(tokenString)
      return token;
    }
    return null;
  }

  isAuthenticated(): boolean{
    const token = this.getToken();
    if(token){
      const expired = this.jwtHelper.isTokenExpired(token)
      this.mostrarMenuEmitter.emit(true);
      return !expired
    }
    this.mostrarMenuEmitter.emit(false);
    return null
  }
}
