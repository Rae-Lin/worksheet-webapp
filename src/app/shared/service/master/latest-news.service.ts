import { AppService } from './../app.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface LatestNews {
  data: any;
  id: number;
  subject: string;
  content: string;
  startAt: string;
  endAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class LatestNewsService extends AppService {
  constructor(
    http: HttpClient
  ) {
    super(http, 'http://10.2.6.108/ptc-worksheet-api/Bulletin?AllData=true');
    // super(http, 'https://jsonplaceholder.typicode.com/todos');
  }
}

export interface LatestNews {
  id: number;
  subject: string;
  content: string;
  startAt: string;
  endAt: string;
}

// @Injectable({
//   providedIn: 'root'
// })
// export class LatestNewsService {
//   configUrl = 'http://10.2.6.108/ptc-worksheet-api/swagger/v1/swagger.json';

//   constructor(private http: HttpClient) { }

//   getNews() {
//     return this.http.get(this.configUrl);
//   }
// }
