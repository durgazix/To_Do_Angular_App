import { Component, input } from '@angular/core';
import { Task } from '../../services/task';
import { TaskItem } from '../../models/task-item.model';
import { TaskListItem } from '../task-list-item/task-list-item';

@Component({
  selector: 'app-task-list',
  imports: [TaskListItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  heading = input.required<string>();
  tasks = input.required<TaskItem[]>();
  
}
