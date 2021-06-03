import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { serviciosService } from 'src/app/servicios/servicios.service';
import { NavController,AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Servicio } from 'src/modelos/servicios';

@Component({
  selector: 'app-servicios-addor-update',
  templateUrl: './servicios-addor-update.page.html',
  styleUrls: ['./servicios-addor-update.page.scss'],
})

export class ServiciosADDorUpdatePage implements OnInit {
  form: FormGroup;
  servicio:Servicio;
 


  constructor( private service:serviciosService,private fb: FormBuilder,public navCtrl: NavController,private alerctl:AlertController,private router:Router) {
    this.crearFormulario()
   }

  ngOnInit() {
   
  }
  crearFormulario(){
    this.form = this.fb.group({
    id:['',Validators.required],
    date_created:['',Validators.required],
    deleted:['',Validators.required],
    name:['',Validators.required],
    type:['',Validators.required],
    entry_date:['',Validators.required],
    deperture_date:['',Validators.required],
    problem_description:['',Validators.required],
    solution_description:['',Validators.required],
    status:['',Validators.required],
    id_customer:['',Validators.required],
    id_vehicles:['',Validators.required],
  })
}
guardarServicio(){
  this.servicio = this.form.value
  console.log(this.servicio)
  this.service.addServicio(this.servicio)
  
      this.form.reset();
}
  

salir(){
  this.router.navigateByUrl('/lista-servicios');

}

}
