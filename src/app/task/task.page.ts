import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  id = null;
  tareas: any[] = [];

  constructor(private http: HttpClient, public navCtrl: NavController, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getTaskById(this.id);
  }

  getTaskById(id: string){
    return new Promise(res => {
        this.http.get('http://localhost:3000/task/task/'+this.id )
        .subscribe((res : any) => {
           this.tareas=res.task;
           console.log(this.tareas);
        });
    });
  }
  cambiarDashboard() {
    this.navCtrl.navigateForward('/dashboard');
  }
  cambiarEstadoProyecto() {
    //this.navCtrl.navigateForward('/status');
    this.navCtrl.navigateForward(['/status', this.id]);
    console.log(this.id+" aaaaaa");
  }
}
