import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, catchError, tap, throwError } from 'rxjs';
import { AuthResponseData } from 'src/app/Auth/shared/model/auth-response-data';
import { User } from 'src/app/Auth/shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogging = false;
  userSub = new BehaviorSubject<User>(null);
  private readonly apiEndPoint = 'http://localhost:6969/user';
  private readonly firebaseEndPoint = 'https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/users.json';

  constructor(
    private http: HttpClient
  ) { }

  // Sign Up with email and password with Firebase API
  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCpXsBXNgViqQB-UOwpw_NWuzcXLR4B7ng',
    { email, password, returnSecureToken: true },
    {
      headers: {
        'content-type': 'application/json'
      }
    }
    )
    .pipe(
      catchError(this.getErrorHandler),
      tap(this.handleUser.bind(this))
    )
  }

  // Login with email and password with Firebase API
  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCpXsBXNgViqQB-UOwpw_NWuzcXLR4B7ng',
    { email, password, returnSecureToken: true },
    {
      headers: {
        'content-type': 'application/json'
      }
    }
    ).pipe(
      catchError(this.getErrorHandler),
      tap(this.handleUser.bind(this))
    )
  }

  // Autologin function
  autoLogin() {
    let userData: { email: string; _token: string; expirationDate: string; localId: string } = JSON.parse(localStorage.getItem('userData'));
    if(!userData){
      return;
    }

    let user = new User(
      userData.email,
      userData.localId,
      userData._token,
      new Date(userData.expirationDate)
    );

    if(user.token){
      this.userSub.next(user);
    }
  }

  // Logout function
  logout() {
    this.isLogging = false;
  }

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLogging);
      }, 1000);
    });
  }

  // Register User function
  createUser(data: any){
    this.http.post(this.firebaseEndPoint, data, {
      headers: {
        "content-type": "application/json"
      }
    }).subscribe((res) => {
      console.log(res);
    })
  }

  // Error Handling Function
  getErrorHandler(errorRes: HttpErrorResponse) {
    let errorMessage = 'Une erreur est survenue!';
    if(!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch(errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Email already Exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email not found';
        break;
      case 'INVAILD_PASSWORD':
        errorMessage = 'Invalid password';
        break;
    }
    return throwError(errorMessage);
  }

  // handle user function
  private handleUser(response: AuthResponseData) {
    const expireDate = new Date(
      new Date().getTime() + + response.expiresIn * 1000
    );
    const user = new User(response.email, response.localId, response.idToken, expireDate);
    this.userSub.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
