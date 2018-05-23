import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switch Board';
  switchBoard = [true, true, true, true, true];

  flipTheSwitch(idx){
     this.switchBoard[idx] = !this.switchBoard[idx;
  } 
  }

}
