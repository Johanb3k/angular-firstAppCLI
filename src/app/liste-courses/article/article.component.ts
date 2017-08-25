import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArrayModel } from 'app/liste-courses/array-model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article;

  @Output()
  triggerDeleted: EventEmitter<ArrayModel> = new EventEmitter<ArrayModel>();

  @Output()
  triggerSelected: EventEmitter<ArrayModel> = new EventEmitter<ArrayModel>();

  constructor() { }

  ngOnInit() {
    console.log("On charge un article");
  }

  deleteArticle(){
    this.triggerDeleted.emit(this.article);
  }

  selectArticle(){
    this.triggerSelected.emit(this.article);
  }
}
