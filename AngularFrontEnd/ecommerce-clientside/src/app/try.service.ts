import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Try } from './try';
@Injectable({
  providedIn: 'root'
})
export class TryService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl = "http://localhost:8080/";

  getDataFromExpress():Observable<Try[]>{
    return this.httpClient.get<Try[]>(`${this.baseUrl}`);
  }
}
