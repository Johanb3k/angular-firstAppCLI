import { Component, OnInit, Input } from '@angular/core';
import { ToDoModel } from './to-do-model';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {
  

  @Input()
  toDoList: ToDoModel[];

  constructor() { }

  ngOnInit() {
  }

}
