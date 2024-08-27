import { Component, Input } from '@angular/core';
import { Todo } from '../todo/todo.model';
import { CommonModule } from '@angular/common';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-list',
  imports:[CommonModule, TodoComponent],
  standalone: true,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() todos: Todo[] = []; 

  get completedTodos(): Todo[] {
    return this.todos.filter(todo => todo.completed);
  }
}
