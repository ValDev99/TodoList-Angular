import { Component } from '@angular/core';
import { Todo } from './todo.model'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports : [FormsModule, CommonModule, ListComponent],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim().length === 0) return;

    const newTask: Todo = {
      id: Date.now(),
      title: this.newTodo,
      completed: false
    };

    this.todos.push(newTask);
    this.newTodo = ''; 
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }

 

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
