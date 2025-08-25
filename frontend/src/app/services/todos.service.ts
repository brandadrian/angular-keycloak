import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todos';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly backendUrl = environment.backendUrl;
  constructor(private http: HttpClient) {}

  getFirstTodo(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>(`${this.backendUrl}/todos-first`);
  }

  getAllTodos(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>(`${this.backendUrl}/todos`);
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.backendUrl}/todos/${id}`);
  }
}
