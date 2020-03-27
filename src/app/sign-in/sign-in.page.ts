import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(private http: HttpClient, public navCtrl: NavController) { }

  ngOnInit() {
  }

  cambiarHome() {
    this.navCtrl.navigateForward('/home');
  }
  signup(email: string, username: string, password: string) {
    this.http.post('http://localhost:3000/user/signup', {
      username: username,
      email: email,
      password: password
    }).subscribe(result => {
      alert('Usuario creado!!');
    });
  }
  onFormSubmit(form: NgForm) {
    this.signup(form.value.email, form.value.username, form.value.password);
  }
}
