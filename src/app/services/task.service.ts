import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ITask } from '../interface/task-interface';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() {
  }

  //tasks$ = this.store.select(tasks);
  taskCount: number;
  taskLeftCount: number;

  loadAll (): void {
    //this.store.dispatch(loadTasks());
  }

  addNew(text: string): void {
    //
  }

  changeStatus(id: number, isCompleted: boolean): void {
    //
  }

  deleteTask(id: number): void {
    //
  }

  selectAll(): void {
    //
  }

  deleteCompleted(): void {
    //
  }
}
