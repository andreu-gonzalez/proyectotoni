import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage  {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  exitApp(){
    this.router.navigate(['./']);
  }
  Servi(){
    this.router.navigate(['/lista-servicios'])
  }
}
