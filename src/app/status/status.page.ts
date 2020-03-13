import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  cargarTarea() {
    this.navCtrl.navigateForward('/task');
  }

}
