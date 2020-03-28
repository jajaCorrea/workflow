import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient, public navCtrl: NavController) {

  }

  ngOnInit() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  }

  login(email: string, password: string) {
    this.http.post('https://workflow-serve.herokuapp.com/user/login', {
      email: email,
      password: password
    }).subscribe((data : any) => {
      alert('Bienvenido!!');
      console.log(data.token);
      //router link
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      this.navCtrl.navigateForward('/dashboard');
    });
  }
  onFormSubmit(form: NgForm) {
    this.login(form.value.email, form.value.password);
  }
}
