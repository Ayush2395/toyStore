import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector, effect, inject, signal } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ICategory, ICreds, IProducts, IToken, IUser } from '../models/model';
import { Router } from '@angular/router';

const baseUrl = 'https://api.escuelajs.co';
const httpHeaders = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private injector = inject(Injector);
  private router = inject(Router);
  public searchValue: string = '';

  public user = signal<IUser | null>(null);
  public tokenSignal = signal<IToken>({ access_token: "", refresh_token: "" });
  public tokenEffect = effect(() => {
    this.userProfile().subscribe({
      next: (response) => {
        this.user.set(response);
      },
      error: (error) => {
        if (error instanceof HttpErrorResponse) {
          console.log(error.error);
        }
      }
    });
  }, { allowSignalWrites: true, injector: this.injector });


  public login = (creds: ICreds) => this.http
    .post<IToken>(baseUrl + '/api/v1/auth/login', creds)
    .pipe(catchError(err => throwError(err)));

  public userProfile = () => this.http
    .get<IUser>(baseUrl + '/api/v1/auth/profile', httpHeaders)
    .pipe(catchError(err => throwError(err)));

  public logout = () => {
    localStorage.removeItem('token');
    this.router.navigate(['/account/signin']);
    this.user.set(null);
  };

  public getProducts = () => this.http
    .get<IProducts[]>(baseUrl + '/api/v1/products', httpHeaders)
    .pipe(catchError(erro => throwError(erro)));

  public getProductsById = (id: string) => this.http
    .get<IProducts>(baseUrl + '/api/v1/products/' + id, httpHeaders)
    .pipe(catchError(err => throwError(err)));

  public getAllCategories = () => this.http
    .get<ICategory[]>(baseUrl + '/api/v1/categories', httpHeaders)
    .pipe(catchError(err => throwError(err)));
}