import { Injectable } from '@angular/core';
import { reject } from 'q';
import { Subject } from 'rxjs/Subject';
import { User } from '../../common/model';


@Injectable()
export class AuthService {

  public auth = false;
  private user: User;

  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  // Service message commands
  emitChange(change: any) {
      this.emitChangeSource.next(change);
  }

  constructor() { }

  isAuth() {
    return this.auth;
  }

  login(username:string, passord:string) {
    console.info("LOGIN")
    return new Promise((resolve, reject) => {

       if(username == 'admin' && passord == 'admin')
       {
        console.info("OK")
        
        this.auth = true;

        this.user = new User();
        this.user.username = "Admin";
        this.user.roles = ["user-list", "user-detail"];

        resolve(this.user);
        this.emitChange(this.user);
       }
       else
       {
        console.error("Error")
         reject("no login");
       }

    })
  }

  getUser() {
    return this.user;
  }

  logout() {
    this.auth = false;
  }

}
