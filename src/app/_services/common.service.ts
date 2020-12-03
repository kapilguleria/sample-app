import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getStore(): Observable<any> {
    return this.http.get(this.apiUrl + '/get-store');
  }

  getStoreSummary(): Observable<any> {
    return this.http.get(this.apiUrl + '/get-store-summary');
  }

  getOrder(): Observable<any> {
    return this.http.get(this.apiUrl + '/get-order');
  }
}
