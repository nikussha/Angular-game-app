import { GamestatsComponent } from './gamestats/gamestats.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  score = 0;
  showresult: boolean = false;
  ipicked: 'scissors' | 'rock' | 'paper' | undefined;
  housepicked: 'scissors' | 'rock' | 'paper' | undefined;
  pickone(item: any) {
    this.ipicked = item;
    this.house();
    this.showresult = true;
  }
  house() {
    let house: ['scissors', 'rock', 'paper'] = ['scissors', 'rock', 'paper'];
    let randomnum = Math.floor(Math.random() * 3);
    console.log(randomnum);

    this.housepicked = house[randomnum];
  }

  constructor() {}
}
