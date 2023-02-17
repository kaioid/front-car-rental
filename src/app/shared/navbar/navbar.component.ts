import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuarioLogado: string;
  role: string;
  constructor(private loginService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.getUsuarioLogado();
    this.role = this.loginService.getUsuarioTipo();
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['login'])
  }
}
