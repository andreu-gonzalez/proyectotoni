import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { serviciosService } from 'src/app/servicios/servicios.service';
import { EmpleadosToAJSON, Servicio } from 'src/modelos/servicios';
import { ServiciosADDorUpdatePage } from '../servicios-addor-update/servicios-addor-update.page';

@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.page.html',
  styleUrls: ['./lista-servicios.page.scss'],
})
export class ListaServiciosPage implements OnInit {

  servicios: Servicio[];
  constructor(private service: serviciosService,private alertCtrl: AlertController,private modalCtrl:ModalController,private router:Router) {
    this.leerservicios()
   }
  ngOnInit(){
    
  }
   leerservicios(){
    this.service.getServicios()
        .subscribe(
          (respuesta) => this.servicios = EmpleadosToAJSON(respuesta)
        ) 
    }
  addservicio(){
    this.router.navigate(['servicios-addor-update']);
  }

  UpdateServicios(servicio:Servicio){
    this.modalCtrl.create({
      component:ServiciosADDorUpdatePage,
      componentProps:{servicio}
    }).then(modal=>{modal.present()
      return modal.onDidDismiss();
    }).then(({data,role})=>{
      this.servicios = this.servicios.filter(std=>{
        if(data.id===std.id){
          return data;
        }
        return std;
      })
    });;
    
  }
  removeser(id:number){
    this.alertCtrl.create({
      header:'Borrar',
      message:'Estas seguro?',
      buttons:[{
        text:'si',
        handler: ()=>{
          this.service.delete(id).subscribe(()=>{
            this.servicios = this.servicios.filter(std=>std.id !==id)
          })
        }
      },
    {text:'No'}]
    }).then(alert =>alert.present())
   
  }
}
