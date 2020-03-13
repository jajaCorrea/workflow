import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  cambiarDashboard() {
    this.navCtrl.navigateForward('/dashboard');
  }

  cambiarEdtText() {
    this.navCtrl.navigateForward('/edt-text');
  }

  cambiarEstadoProyecto() {
    this.navCtrl.navigateForward('/status');
  }

}
