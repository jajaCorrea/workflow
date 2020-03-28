import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  id = null;
  statusValue = '';
  tareas: any[] = [];

  constructor(private http: HttpClient,public navCtrl: NavController, private activatedRoute: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getTaskById(this.id);
   
  }

  cargarTarea() {
    //this.navCtrl.navigateForward(['/dashboard', this.id]);
    this.router.navigate(['/dashboard']);
  }
  getTaskById(id: string){
    return new Promise(res => {
        this.http.get('https://workflow-serve.herokuapp.com/task/task/'+this.id )
        .subscribe((res : any) => {
           this.tareas=res.task;
           console.log(this.tareas);
        });
    });
  }

  updateTask( prioridad: string,
    estado: string, progreso: number, responsable:string, descripcion: string, anotaciones: string) {
   this.http.put('https://workflow-serve.herokuapp.com/task/task/'+this.id, {
       prioridad: prioridad,
       estado: estado,
       progreso: progreso/100,
       responsable: responsable,
       descripcion: descripcion,
       anotaciones:anotaciones
   }).subscribe((data : any) => {
     alert('Tarea modificada con exito!!');
     this.cargarTarea();
   });
 }
 onFormSubmit(form: NgForm) {
  this.updateTask(
    form.value.prioridad, form.value.estado, 
    form.value.progreso, form.value.responsable, form.value.descripcion,
    form.value.anotaciones);
}
}
