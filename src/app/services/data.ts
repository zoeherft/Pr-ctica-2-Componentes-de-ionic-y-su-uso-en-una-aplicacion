
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Componente } from '../interfaces/interfaces';         // <- IMPORTANTE

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts(): Observable<Componente[]> {
    return this.http.get<Componente[]>('/assets/data/menu-opts.json'); // <- /assets/data/...
  }
}
