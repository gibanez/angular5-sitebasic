import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {

  public isAuth: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    
    this.authService.changeEmitted$.subscribe(() => {
      this.isAuth = this.authService.isAuth();
    });

    
  }

  logout() {
    this.authService.logout();
    this.isAuth = false;
  }


}