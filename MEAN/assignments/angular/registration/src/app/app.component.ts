import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tidle Wave';
  user = new User();
  users = [];
  success = false;
  currentUser = [];

  onSubmit(formData: NgForm) {
       event.preventDefault();
     //   this will clear the current user so the success message is updated
       if (this.currentUser !== []) {
            this.currentUser = [];
       }

       this.currentUser.push(this.user);
       this.success = true;
       this.users.push(this.user);
       this.user = new User();
  }

}
