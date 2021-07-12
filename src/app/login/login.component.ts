import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

   closeModal()
  {
    this.modalCtrl.dismiss();
  }

}
