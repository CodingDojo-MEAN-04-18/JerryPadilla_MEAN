
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails = [{
       email: 'bill@gates.com',
       importance: true,
       subject: 'New Windows',
       content: 'Windows XI will launch in year 2010'
    },
    {
         email: 'ado@lovelace.com',
         importance: true,
         subject: 'Programming',
         content: 'Enchantress of Numbers',
    },
    {
         email: 'Rose@lovelace.com',
         importance: false,
         subject: 'I love programming',
         content: 'What is even going on in the right now. I figured it out.',
    },
    {
         email: 'Jerrypadilla23@gmail.com',
         importance: true,
         subject: 'Javascript',
         content: 'Love this Angular stuff so far',
    }];
}
