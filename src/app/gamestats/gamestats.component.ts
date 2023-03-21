import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamestats',
  templateUrl: './gamestats.component.html',
  styleUrls: ['./gamestats.component.scss'],
})
export class GamestatsComponent implements OnInit {
  @Input() mychoice: 'scissors' | 'rock' | 'paper' | undefined = undefined;
  @Input() housepicked: 'scissors' | 'rock' | 'paper' | undefined = undefined;
  @Output() scoreChange = new EventEmitter();
  @Input() score: number = 12;
  @Input() showresult!: boolean;
  @Output() showresultChange = new EventEmitter();
  displaywinner: string = '';
  showbtn = false;
  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      this.showbtn = true;
    }, 1000);
    this.identyfy();
    this.incordec();
  }
  identyfy() {
    if (this.mychoice == 'scissors' && this.housepicked == 'rock') {
      this.displaywinner = 'YOU LOSE';
    } else if (this.mychoice == 'rock' && this.housepicked == 'paper') {
      this.displaywinner = 'YOU LOSE';
    } else if (this.mychoice == 'paper' && this.housepicked == 'scissors') {
      this.displaywinner = 'YOU LOSE';
    } else if (this.mychoice == this.housepicked) {
      this.displaywinner = "IT'S A DRAW";
    } else {
      this.displaywinner = 'YOU WIN';
    }
  }
  incordec() {
    if (this.displaywinner == 'YOU LOSE') {
      setTimeout(() => {
        if (this.score > 0) {
          this.scoreChange.emit((this.score -= 1));
        }
      }, 0);
    } else if (this.displaywinner == 'YOU WIN') {
      setTimeout(() => {
        this.scoreChange.emit((this.score += 1));
      }, 0);
    }
  }
  changeresult() {
    this.showresultChange.emit((this.showresult = false));
    console.log(this.showresult);
  }
}
