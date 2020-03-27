import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edt-text',
  templateUrl: './edt-text.page.html',
  styleUrls: ['./edt-text.page.scss'],
})
export class EdtTextPage implements OnInit {
  id = null;
  tareas: any[];
  // tareas: any[] = [
  //   {
  //     id: 0,
  //     nombre: 'Agregar variables',
  //     proyecto: 'Workflow',
  //     prioridad: 'success',
  //     progreso: 0.5,
  //     estado: 'Pendiente',
  //     responsable: 'Juan Mediavilla',
  //     descripcion: 'Descripcion Workflow',
  //     anotaciones:  'Anotaciones workflow'
  //   },
  //   {
  //     id: 1,
  //     nombre: 'Crear repositorio',
  //     proyecto: 'VentaMaster',
  //     prioridad: 'danger',
  //     progreso: 0.1,
  //     estado: 'Cancelado',
  //     responsable: 'Jordi Acero',
  //     descripcion: 'Descripcion VentaMaster',
  //     anotaciones:  'Anotaciones ventaMaster'
  //   },
  //   {
  //     id: 2,
  //     nombre: 'Agregar borrador',
  //     proyecto: 'Colorrillo',
  //     prioridad: 'warning',
  //     progreso: 0.2,
  //     estado: 'Pendiente',
  //     responsable: 'Jose Gonzalez',
  //     descripcion: 'Descripcion Colorillo',
  //     anotaciones:  'Anotaciones Colorrillo'
  //   },
  //   {
  //     id: 3,
  //     nombre: 'Desarrollar IA',
  //     proyecto: 'Akinator',
  //     prioridad: 'warning',
  //     progreso: 0.75,
  //     estado: 'Pendiente',
  //     responsable: 'Sergio Bermudez',
  //     descripcion: 'Descripcion Akinator',
  //     anotaciones:  'Anotaciones Akinator'
  //   },
  //   {
  //     id: 4,
  //     nombre: 'Lectura por camara',
  //     proyecto: 'OpenCV',
  //     prioridad: 'success',
  //     progreso: 0.9,
  //     estado: 'En pausa',
  //     responsable: 'Juan Arenas',
  //     descripcion: 'Descripcion OpenCV',
  //     anotaciones:  'Anotaciones OpenCV'
  //   }
  // ];

  constructor(public navCtrl: NavController, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  cargarTarea() {
    this.navCtrl.navigateForward(['/task', this.id]);
  }

}
