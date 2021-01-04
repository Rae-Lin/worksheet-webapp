import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
export class AppService {
  constructor(
    private http: HttpClient,
    // private url = 'http://10.2.6.108/ptc-worksheet-api/swagger/v1/swagger.json';
    private url: string
  ) {}

  private handleError = (err: HttpErrorResponse) => {
    let errorMessage: string;
    switch (err.status) {
      case 400:
        errorMessage = '參數錯誤';
        break;

      case 404:
        errorMessage = '內容不存在';
        break;

      default:
        errorMessage = '異常錯誤';
        break;
    }

    return of({ errorMessage: errorMessage });
  }

  // tslint:disable-next-line: typedef
  getData(id) {
    return this.http.get(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // tslint:disable-next-line: typedef
  getAll() {
    return this.http.get(`${this.url}`).pipe(
      catchError(this.handleError)
    );
  }

  // tslint:disable-next-line: typedef
  postData(data) {
    return this.http.post(this.url, data).pipe(
      catchError(this.handleError)
    );
  }

  // tslint:disable-next-line: typedef
  updateData(id, data) {
    return this.http.patch(`${this.url}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // tslint:disable-next-line: typedef
  updateAll(id, data) {
    return this.http.put(`${this.url}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // tslint:disable-next-line: typedef
  deleteData(id) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }
}
