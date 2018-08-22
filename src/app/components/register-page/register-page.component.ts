import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService
  ) { }

  onSubmitAddUser() {
    alert(this.password);
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        console.log('Registered');
      }).catch((err) => {
          console.error(err);
    });
  }

  ngOnInit() {
  }

}
