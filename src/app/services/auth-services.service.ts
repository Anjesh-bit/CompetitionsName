import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';

const TOKEN_KEY = 'user_access_token';

@Injectable({
  providedIn: 'root',
})
export class AuthServicesService {
  user: Observable<any>;
  authState = new BehaviorSubject(null);

  constructor(private Storage: Storage) {
    this.user = this.authState.asObservable();
  }

  login(credentials): Observable<any> {
    let email = credentials.email;
    let password = credentials.password;
    let user = null;
    if (email == 'admin@gmail.com' && password == 'admin') {
      user = { email, role: 'ADMIN' };
    }
    this.authState.next(user);
    this.Storage.set(TOKEN_KEY, user);
    return of(user);
  }
  logout() {
    this.Storage.remove(TOKEN_KEY).then(() => {
      this.authState.next(false);
    });
  }
}
