import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StringConst } from '../_helpers/string-constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    if (data) {
      return this.http.post(this.apiUrl + '/login', data);
    } else {
      return new Observable((observer: Observer<any>) => observer.error(StringConst.INVALID_INFORMATION));
    }
  }

  signup(data: any): Observable<any> {
    if (data) {
      return this.http.post(this.apiUrl + '/signup', data);
    } else {
      return new Observable((observer: Observer<any>) => observer.error(StringConst.INVALID_INFORMATION));
    }
  }
}
