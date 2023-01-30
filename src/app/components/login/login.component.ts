import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  usuario: Usuario = new Usuario;
  loginSuccess: boolean = true;
  erro = 'Falha na tentativa de login'

  constructor(private loginService: LoginService){}

  public login(){
    this.loginService.login(this.usuario);
    this.loginSuccess = false;
  }

  ngOnInit(): void {
  }

  onSubmit(dados){
    this.usuario = dados.value
    this.login();

  }

}
