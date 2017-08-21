import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jour = 'lundi';
  inputValue: string = ' ';

  listeToDo: string[] = [];

  createToDo(){
    if(this.inputValue) {
      this.listeToDo.push(this.inputValue);
      this.inputValue = "";
    }
  }
}
