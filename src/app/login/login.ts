import {Component, inject} from '@angular/core';
import {AuthenticationService} from '../authentication-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone: true,
  imports: [FormsModule]
})
export class Login {
  username = '';
  password = '';
  message!: string;
  private loginService: AuthenticationService = inject(AuthenticationService);

  get isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  get loggedUser(): string {
    return this.loginService.getUser();
  }

  checkLogin(): boolean {
    this.message = '';
    if (!this.loginService.login(this.username, this.password)) {
      this.message = 'Invalid Login';
      setTimeout(() => {
        this.message = '';
      }, 2500);
      return false;
    }
    return true;
  }

  logout(): boolean {
    this.loginService.logout();
    return true;
  }
}
