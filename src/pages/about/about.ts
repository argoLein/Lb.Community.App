import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  title: string;
  isGoDefault: boolean;

  constructor(public navCtrl: NavController, ) {
    this.title = "My Radio Buttons";
    this.isGoDefault = false;
  } 

  getRadioItems() : string[] {
    return ["Val1", "Val2", "Val2"];
  }

}
