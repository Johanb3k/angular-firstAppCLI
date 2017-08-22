import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesFiltresComponent } from './pipes-filtres.component';

describe('PipesFiltresComponent', () => {
  let component: PipesFiltresComponent;
  let fixture: ComponentFixture<PipesFiltresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesFiltresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesFiltresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
