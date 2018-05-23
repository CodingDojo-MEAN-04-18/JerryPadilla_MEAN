

import { Component, OnInit } from '@angular/core';
import { angularMath } from 'angular-ts-math';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Retro Barcode';
  colorArray = [];
  array = [1,2,3];

  colorPicker() {
     console.log('click actionnn')
     for (let i = 0; i < 10; i++){

          const randNumb: number = angularMath.getIntegerRandomRange(0, 10);
          if(randNumb === 0){
               this.colorArray.push('black')
          } else if (randNumb === 1){
               this.colorArray.push('red');
          } else if (randNumb === 2){
               this.colorArray.push('blue');
          } else if (randNumb === 3){
               this.colorArray.push('green');
          } else if (randNumb === 4){
               this.colorArray.push('yellow');
          } else if (randNumb === 5){
               this.colorArray.push('brown');
          } else if (randNumb === 6){
               this.colorArray.push('gray');
          } else if (randNumb === 7){
               this.colorArray.push('teal');
          } else if (randNumb === 8){
               this.colorArray.push('pink');
          } else if (randNumb === 9){
               this.colorArray.push('purple');
          } else if (randNumb === 10){
               this.colorArray.push('orange');
          } 
     
       }
  }
  ngOnInit(): void {
       this.colorPicker();
       //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
       //Add 'implements OnInit' to the class.
       
  }

  
}
