import { AlertController, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
export class AddCompetition {
  _id: string;
  Title: string;
  Description: string;
  AuthorName: string;
}
@Injectable({
  providedIn: 'root',
})
export class AddCompetitionServicesService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  selectedCompetition: AddCompetition;
  Competitions: AddCompetition[];

  constructor(
    private http: HttpClient,
    private Alert: AlertController,
    private toastController: ToastController
  ) {}

  AddCompetition(credentials: AddCompetition): Observable<any> {
    return this.http
      .post<AddCompetition>('http://localhost:3000/addcompetition', credentials)
      .pipe(
        catchError((e) => {
          this.showAlert(e.error.msg);
          throw new Error(e);
        })
      );
  }

  createUserCompetition(user: AddCompetition): Observable<any> {
    return this.http
      .post<AddCompetition>(
        'http://localhost:3000/getCompetetionCreate',
        user,
        this.httpOptions
      )
      .pipe(catchError(this.handleError<AddCompetition>('Error occured')));
  }

  getCompetitionId(id): Observable<AddCompetition[]> {
    return this.http
      .get<AddCompetition[]>('http://localhost:3000/getCompetition/' + id)
      .pipe(
        tap((_) => console.log(`User fetched: ${id}`)),
        catchError(this.handleError<AddCompetition[]>(`Get user id=${id}`))
      );
  }

  getUsersCompetition(): Observable<AddCompetition[]> {
    return this.http
      .get<AddCompetition[]>('http://localhost:3000/getCompetition')
      .pipe(
        tap((users) => console.log('Users retrieved!')),
        catchError(this.handleError<AddCompetition[]>('Get user', []))
      );
  }

  updateUser(id, user: AddCompetition): Observable<any> {
    return this.http
      .put('http://localhost:3000/getCompetition/' + id, user, this.httpOptions)
      .pipe(
        tap((_) => console.log(`User updated: ${id}`)),
        catchError(this.handleError<AddCompetition[]>('Update user'))
      );
  }

  deleteUser(id): Observable<AddCompetition[]> {
    return this.http
      .delete<AddCompetition[]>(
        'http://localhost:3000/getCompetition/' + id,
        this.httpOptions
      )
      .pipe(
        tap((_) => console.log(`User deleted: ${id}`)),
        catchError(this.handleError<AddCompetition[]>('Delete user'))
      );
  }
  showAlert(msg) {
    let alert = this.Alert.create({
      message: msg,
      header: 'Error',
      buttons: ['Ok'],
    });
    alert.then((alert) => alert.present());
  }
  toast() {
    let toast = this.toastController.create({
      message: 'Saved Sucessfully',
      duration: 3000,
    });
    toast.then((toast) => toast.present());
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
