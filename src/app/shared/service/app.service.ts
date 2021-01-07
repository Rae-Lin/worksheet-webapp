import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, map, retry } from 'rxjs/operators';

export interface APIdata {
  data: any;
  page: number;
  start: number;
  end: number;
  totalCount: number;
  totalPages: number;
  list: any[];
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export class AppService {
  constructor(
    private http: HttpClient,
    private url: string
  ) {}

  private handleError = (err: HttpErrorResponse) => {
    let errorMessage: string;
    switch (err.status) {
      case 400:
        errorMessage = '400 參數錯誤';
        break;

      case 404:
        errorMessage = '404 內容不存在';
        break;

      default:
        errorMessage = '異常錯誤';
        break;
    }
    return of({ errorMessage });
  }

  // getAll(): Observable<APIdata> {
  //   return this.http.get<APIdata>(`${this.url}`).pipe(
  //     map(res => res.data.list),
  //     catchError(this.handleError),
  //   );
  // }

  getAll(): any {
    return this.http.get<any>(`${this.url}`).pipe(
      map(res => res.data.list),
      catchError(this.handleError),
    );
  }

  getData(id): any {
    return this.http.get<any>(`${this.url}/${id}`).pipe(
      catchError(this.handleError),
    );
  }

  postData(data): any  {
    return this.http.post<any>(this.url, data).pipe(
      catchError(this.handleError)
    );
  }

  updateData(id, data): any  {
    return this.http.patch<any>(`${this.url}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  updateAll(id, data): any  {
    return this.http.put<any>(`${this.url}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  deleteData(id): any  {
    return this.http.delete<any>(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }
}
