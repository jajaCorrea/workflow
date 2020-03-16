import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  // Posicion de tareas[]:
  // pos 0: tarea, pos 1: proyecto, pos 2: prioridad (success: baja, warning: media, danger: alta)
  // pos 3: progreso (0 a 1), pos 4: estado (pendiente, en pausa, cancelada, finalizada)
  // pos 5: responsable, pos 6: descripcion_tarea, pos 7: anotaciones
  tareas = [
    ['Agregar variables', 'Workflow', 'success', 0.5, 'Pendiente', 'Juan Mediavilla', 'Descripcion Workflow', 'Anotaciones workflow'],
    ['Crear repositorio', 'VentaMaster', 'danger', 0.1, 'Cancelado', 'Jordi Acero', 'Descripcion VentaMaster', 'Anotaciones ventaMaster'],
    ['Agregar borrador', 'Colorrillo', 'warning', 0.2, 'Pendiente', 'Jose Gonzalez', 'Descripcion Colorillo', 'Anotaciones Colorrillo'],
    ['Desarrollar IA', 'Akinator', 'warning', 0.75, 'Pendiente', 'Sergio Bermudez', 'Descripcion Akinator', 'Anotaciones Akinator'],
    ['Lectura por camara', 'OpenCV', 'success', 0.9, 'En pausa', 'Juan Arenas', 'Descripcion OpenCV', 'Anotaciones OpenCV']
  ];

  constructor(public navCtrl: NavController) { }

  cargarTarea() {
    this.navCtrl.navigateForward(['/task', this.tareas]);
  }
  cargarNuevaTarea() {
    this.navCtrl.navigateForward('/add-task');
  }
  ngOnInit() {
  }

}
