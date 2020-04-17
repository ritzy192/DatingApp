import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/User';

const httpOptions = {
  headers: new HttpHeaders({
    // tslint:disable-next-line: object-literal-key-quotes
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) {}

getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl + 'users', httpOptions);
}

getUser(id): Observable<User> {
  return this.http.get<User>(this.baseUrl + 'user/' + id, httpOptions);
}

}