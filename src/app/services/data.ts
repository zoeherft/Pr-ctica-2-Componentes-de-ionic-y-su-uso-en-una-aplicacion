//data service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Componente } from '../interfaces/interfaces';     
import { delay } from 'rxjs/operators';  // <- IMPORTANTE

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbumes() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getMenuOpts(): Observable<Componente[]> {
    return this.http.get<Componente[]>('/assets/data/menu-opts.json'); // <- /assets/data/...
  }

  getHeroes(): Observable<Componente[]> {
  return this.http.get<Componente[]>('/assets/data/superheroes.json') // 👈 sin ;
    .pipe(
      delay(1500)   // retrasa 1.5s para que se vea el skeleton loader
    );
}


}
