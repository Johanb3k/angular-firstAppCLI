import { Component, OnInit, Input } from '@angular/core';
import { ToDoModel } from './list-element/to-do-model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  newToDoText: string;
  toDoList: ToDoModel[] = [];

  constructor() { }

  ngOnInit() {
  }

  addElt() {
    if(this.newToDoText !== '') {
      this.toDoList.push({
        text: this.newToDoText,
        isChecked: false
      });
    }
  }


}
