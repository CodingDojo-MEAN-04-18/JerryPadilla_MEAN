import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Time Zone Display';
  time = new Date();

  selectedTimezone = null;

  onButtonClick(data){
     this.time = new Date();
     if(data === 'PST'){
          this.time.setHours(this.time.getHours() - 2);
     } else if (data === 'MST'){
          this.time.setHours(this.time.getHours() - 1);
     } else if (data === 'EST'){
          this.time.setHours(this.time.getHours() + 1);
     } else if (data === 'CST'){
          this.time.setHours(this.time.getHours() + 0);
     }

     this.selectedTimezone = data;
  }

}
