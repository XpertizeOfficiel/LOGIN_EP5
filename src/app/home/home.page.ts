import { Component,OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {

 constructor(public modalCtrl: ModalController, public navCtrl: NavController) { }

  ngOnInit() {
  }

  async registerModal() {
    const modalCtrl = await this.modalCtrl.create({
      component: RegisterComponent
    });
    await modalCtrl.present();
  }

  async loginModal() {
    const modalCtrl = await this.modalCtrl.create({
      component: LoginComponent
    });
    await modalCtrl.present();
  }

}
