import { AppService } from './../app.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface LatestNews {
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
  constructor(http: HttpClient) {
    // super(http, 'https://next.json-generator.com/api/json/get/Vk5yYXURF');
    super(http, 'http://10.2.6.108/ptc-worksheet-api/Bulletin');
  }
}
