import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCoursesComponent } from './liste-courses.component';

describe('ListeCoursesComponent', () => {
  let component: ListeCoursesComponent;
  let fixture: ComponentFixture<ListeCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
