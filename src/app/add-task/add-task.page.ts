import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  cambiarDashboard() {
    this.navCtrl.navigateForward('/dashboard');
  }

}
