import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
import { StoragesessionService } from 'src/app/servicios/storagesession.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user="";
  pwd="";

  constructor(private router:Router, private StgSession:StoragesessionService, private loginService:LoginService) { }

  ngOnInit() {
  }

  logIn(){
    this.loginService.login(this.user, this.pwd);
  }

  irConfig(){
    this.router.navigate(['/config']);
  }


}