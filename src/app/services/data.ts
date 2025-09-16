import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Asegúrate de que el nombre del método sea el correcto
  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
