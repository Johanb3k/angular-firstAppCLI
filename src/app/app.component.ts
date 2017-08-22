import { Component } from '@angular/core';
import { GreetingPipe } from './greeting.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  today = new Date();
  jour = 'lundi';
  inputValue: string = ' ';

  listeToDo: string[] = [];

  name: string = 'Johan Doe';
  isMale: boolean = true;

  createToDo(){
    if (this.inputValue) {
      this.listeToDo.push(this.inputValue);
      this.inputValue = '';
    }
  }
} 
