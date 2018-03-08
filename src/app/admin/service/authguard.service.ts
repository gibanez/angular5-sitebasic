import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router:Router, private authService:AuthService) { }

  canActivate(route: ActivatedRouteSnapshot) {
    
    console.log('Check access');
    console.info(route.data);
    console.info(this.authService.getUser());

    if (route.data.role) 
    {
      this.checkRole(route.data.role);
    }
    

    if(this.authService.isAuth())
    {

      

      return true;
    }
    
    this.router.navigate(['/admin/login']);
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }

  checkRole(role) {
    console.info(this.user.role.indexOf(role))
  }

}
