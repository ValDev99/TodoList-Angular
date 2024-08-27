// src/app/todo/todo.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { Todo } from './todo.model';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, ListComponent]
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: string = '';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadTodos(); 
  }

  addTodo() {
    if (this.newTodo.trim().length === 0) return;

    const newTask: Todo = {
      id: Date.now(),
      title: this.newTodo,
      completed: false
    };

    this.todos.push(newTask);
    this.newTodo = '';
    this.saveTodos(); 
    this.cdr.detectChanges();
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed; 
    this.saveTodos(); 
    console.log('Tâche modifiée:', todo);
    this.cdr.detectChanges();
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.saveTodos(); 
    this.cdr.detectChanges();
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos)); 
  }

  loadTodos() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos); 
    }
  }
}