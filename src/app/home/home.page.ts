import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  monto: number = 0;
  porcentaje: number = 0;
  propina: number = 0;
  total: number = 0;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    let porcentaje: number = Number(window.localStorage.getItem('porcentaje'));

    if (porcentaje) {
      this.porcentaje = porcentaje;
    }
  }

  Navegar() {
    this.navCtrl.navigateForward('/configuracion');
  }

  cambiarPantalla() {
    this.Navegar();
  }

  Calcular() {
    this.propina = (this.monto * 1) * (this.porcentaje * 1) / 100;
    this.total = (this.propina * 1) + (this.monto * 1);
  }

}
