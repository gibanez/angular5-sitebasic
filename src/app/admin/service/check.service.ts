import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class CheckService implements CanActivate {

  constructor(private router:Router, private authService:AuthService) { }

  canActivate() {
    

    if(this.authService.isAuth())
    {
      return true;
    }
    console.log('Prohibido el acceso');
    this.router.navigate(['/admin/login']);
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }

}
