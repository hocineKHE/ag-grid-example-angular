import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersInfoService {

  constructor(private httpClient: HttpClient ) { }
  getUsersData(): Observable<any>{
   return this.httpClient.get('https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json');
  }
}
