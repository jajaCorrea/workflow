import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  constructor(private http: HttpClient, public navCtrl: NavController) { }

  ngOnInit() {
  }
  addTask(nombre: string, proyecto: string, prioridad: string,
     estado: string,progreso: number, responsable:string, descripcion: string, anotaciones: string) {
    this.http.post('http://localhost:3000/task/task', {
        nombre: nombre,
        proyecto: proyecto,
        prioridad: prioridad,
        estado: estado,
        progreso: progreso,
        responsable: responsable,
        descripcion: descripcion,
        anotaciones:anotaciones
    }).subscribe((data : any) => {
      alert('Tarea agregada con exito!!');
      this.navCtrl.navigateForward('/dashboard');
    });
  }
  onFormSubmit(form: NgForm) {
    this.addTask(form.value.nombre, form.value.proyecto,
      form.value.prioridad, form.value.estado, 
      form.value.progreso, form.value.responsable, form.value.descripcion,
      form.value.anotaciones);
  }
}
