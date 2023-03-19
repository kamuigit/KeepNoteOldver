import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note-view/Notes';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/notes';

  getNote(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url); ///get retrives the values
  }

  addNew(not: Note): Observable<Note> {
    return this.http.post<Note>(this.url, not); ///post automatically creates an id
  }
  saveEdited(not: Note): Observable<Note> {
    return this.http.put<Note>(`${this.url}/${not.id}`, not); ///put and delete requires id to target the exact value
  }

  deleteNote(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
