import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  usuario: Usuario = new Usuario;

  constructor(private loginService: LoginService){}

  public login(){
    this.loginService.login(this.usuario);
  }

  ngOnInit(): void {
  }

  onSubmit(dados){
    this.usuario = dados.value
    this.login();

  }

}
