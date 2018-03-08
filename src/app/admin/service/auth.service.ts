import { Injectable } from '@angular/core';
import { reject } from 'q';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class AuthService {

  public auth = true;

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
        document.cookie = "auth=1";
        this.auth = true;
        resolve({});
        this.emitChange(true);
       }
       else
       {
        console.error("Error")
         reject("no login");
       }

    })
  }

  logout() {
    this.auth = false;
  }

}
