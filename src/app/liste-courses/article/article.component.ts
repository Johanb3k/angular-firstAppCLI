import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ArrayModel } from 'app/liste-courses/array-model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None
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
    console.log('On charge un article');
  }

  deleteArticle() {
    this.triggerDeleted.emit(this.article);
  }

  selectArticle() {
    this.triggerSelected.emit(this.article);
  }
}
