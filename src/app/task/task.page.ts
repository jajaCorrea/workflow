import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  tarea = null;

  constructor(public navCtrl: NavController, private activeRoute: ActivatedRoute) { }

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
