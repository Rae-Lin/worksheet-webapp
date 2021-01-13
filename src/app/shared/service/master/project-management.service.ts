import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagementService extends AppService {

  constructor(http: HttpClient) {
    super(http, 'http://10.2.6.108/ptc-worksheet-api/ProjectGroupItem');
  }
}