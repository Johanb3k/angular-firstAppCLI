import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter  } from '@angular/core';
import { ToDoModel } from './to-do-model';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ListElementComponent implements OnInit {
  

  @Input()
  myToDoList: ToDoModel;

  @Output()
  deleteTriggered: EventEmitter<ToDoModel> = new EventEmitter<ToDoModel>();

  deleteToDo() {
    console.log("deleteToDo");
    this.deleteTriggered.emit(this.myToDoList);
  }

  constructor() { }

  ngOnInit() {
  }

}
