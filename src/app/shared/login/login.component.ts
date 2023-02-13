import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: FormGroup;

  constructor(private loginService: AuthService, private formBuilder: FormBuilder){}

  login(){
    this.loginService.login(this.usuario.value);
  }

  ngOnInit(){
    this.usuario = this.formBuilder.group({
      email: [null],
      senha: [null]
    })
  }

}
