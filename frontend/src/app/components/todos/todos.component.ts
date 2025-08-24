import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/todos';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todosJson: any = null;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.getFirstTodo().subscribe({
      next: (todos: Todo[]) => {
        console.warn(JSON.parse(JSON.stringify(todos)));
      },
      error: (error) => {
        console.error('Error loading first todo:', error);
        console.warn(JSON.parse(JSON.stringify(error)));
      }
    });

    this.todosService.getAllTodos().subscribe({
      next: (todos: Todo[]) => {
        this.todosJson = JSON.parse(JSON.stringify(todos));
      },
      error: (error) => {
        console.error('Error loading todos:', error);
        this.todosJson = JSON.parse(JSON.stringify(error));;
      }
    });
  }
}
