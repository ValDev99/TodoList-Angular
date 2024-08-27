import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { ListComponent } from './list/list.component';



export const routes: Routes = [
    {path: "todo", component: TodoComponent},
    {path: "", redirectTo: "todo", pathMatch: 'full' },
    {path: "list", component: ListComponent}
];
