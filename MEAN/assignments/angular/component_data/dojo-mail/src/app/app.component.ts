import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails = {
    '1': {
      email: 'bill@gates.com',
      importance: true,
      subject: 'New Windows',
      content: 'Windows XI will launch in year 2010',
    },
    '2': {
      email: 'ado@lovelace.com',
      importance: true,
      subject: 'Programming',
      content: 'Enchantress of Numbers',
    },
  };
}
