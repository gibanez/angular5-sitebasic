import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = '';
  public password: string = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  login() {
    console.info("controller login");
    console.info(this.username, this.password)
    
    this.authService.login(this.username, this.password).then(() => {
      this.router.navigate(['admin/']);
    }, (error) => {
      alert(error)
    })
    
  }

}
