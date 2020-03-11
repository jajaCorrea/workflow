import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage {
  propina: number = 0;

  constructor(public navCtrl: NavController) { }

  Guardar() {
    let propina = String(this.propina);
    window.localStorage.setItem('porcentaje', propina);
    this.navCtrl.navigateForward('/home');
  }

  ionViewDidEnter() {
    let propina = Number(window.localStorage.getItem('porcentaje'));
    if (propina) {
      this.propina = propina;
    }
  }

}
