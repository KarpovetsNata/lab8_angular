import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { TaskItemComponent } from './task-item/task-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgFor, TaskItemComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  title = 'Список завдань Angular';

  newTask = '';

  filter = 'all';

  tasks = [

    { text: 'Вивчити Angular', completed: false },

    { text: 'Зробити лабораторну №8', completed: false },

    { text: 'Завантажити проєкт на GitHub', completed: false }

  ];

  addTask() {

    if (this.newTask.trim()) {

      this.tasks.push({

        text: this.newTask,

        completed: false

      });

      this.newTask = '';

    }

  }

  deleteTask(index: number) {

    this.tasks.splice(index, 1);

  }

  toggleTask(index: number) {

    this.tasks[index].completed = !this.tasks[index].completed;

  }

  filteredTasks() {

    if (this.filter === 'active') {

      return this.tasks.filter(t => !t.completed);

    }

    if (this.filter === 'completed') {

      return this.tasks.filter(t => t.completed);

    }

    return this.tasks;

  }

}