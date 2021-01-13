import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailsePage } from './todo-detailse.page';

describe('TodoDetailsePage', () => {
  let component: TodoDetailsePage;
  let fixture: ComponentFixture<TodoDetailsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDetailsePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
