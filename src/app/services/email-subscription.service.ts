import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { catchError, retry, retryWhen, map } from 'rxjs/operators';

import { SubscriptionResponse } from '../models/subscription-response';


@Injectable({
  providedIn: 'root'
})
export class EmailSubscriptionService {
  url = 'http://localhost:3000/'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(private http: HttpClient) { }

  sendEmailSubscription(email: string): Observable<SubscriptionResponse> {
    const data = new HttpParams({ fromString: `email=${email}` });
    return this.http.post<SubscriptionResponse>(`${this.url}api/subscription`, data, this.httpOptions);
  }
}
