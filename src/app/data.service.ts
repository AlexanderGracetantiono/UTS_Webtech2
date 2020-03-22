import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'https://crudcrud.com/api/????'; // berbeda untuk setiap mahasiswa

  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get(`${this.baseUrl}/hero`);
  }

  getHero(id: number) {
    // ?
  }

  postHero(hero: Hero) {
    delete hero._id; // we delete the id because it'll generated by server
    return this.http.post(`${this.baseUrl}/hero`, null);
  }

  updateHero(hero: Hero) {
    const id = hero._id; // we copy the original id
    delete hero._id; // we delete the original id so the server doesn't reply with error message
    return this.http.put(`${this.baseUrl}/hero/${id}`, null);
  }

  deleteHero(hero: Hero) {
    // ?
  }
}
