import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { EventEmitter, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


import { AppConstants } from '../app-constants';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  jwtHelper: JwtHelperService = new JwtHelperService();
  usuarios: any;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router, private crudService: CrudService) { }

  login(usuario){
    return this.http.post<any>(AppConstants.baseLogin, JSON.stringify(usuario), {observe: 'response'}).subscribe(data=>{
      let access_token = JSON.stringify(data.headers.get("authorization"));
      localStorage.setItem("access_token", access_token);
      this.router.navigate(['veiculos'])
  })
      
  }

  logout(){
    localStorage.removeItem('access_token')
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
        }
      }
    })
  }

  getToken(){
    const tokenString = localStorage.getItem("access_token")
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
