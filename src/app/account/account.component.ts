import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  userName = 'John Doe';
  userEmail = 'john.doe@example.com';
  userAddress = '123 Main Street, Cityville';

  logout() {
    // Implement logout logic here
    console.log('Logout clicked');
  }
}
