import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface LatestNews {
  subject: string;
  content: string;
  startAt: string;
  endAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class LatestNewsService {
  configUrl = 'http://10.2.6.108/ptc-worksheet-api/swagger/v1/swagger.json';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getNews() {
    return this.http.get(this.configUrl);
  }
}
