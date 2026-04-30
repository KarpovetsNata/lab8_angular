import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  standalone: true,
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})

export class TaskItemComponent {

  @Input() task!: any;
  @Input() index!: number;

  @Output() deleteTask = new EventEmitter<number>();
  @Output() toggleTask = new EventEmitter<number>();

  toggleComplete() {

    this.toggleTask.emit(this.index);

  }

  removeTask() {

    this.deleteTask.emit(this.index);

  }

}