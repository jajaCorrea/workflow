import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edt-text',
  templateUrl: './edt-text.page.html',
  styleUrls: ['./edt-text.page.scss'],
})
export class EdtTextPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  cargarTarea() {
    this.navCtrl.navigateForward('/task');
  }

}
