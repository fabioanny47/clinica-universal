import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailssPage } from './todo-detailss.page';

describe('TodoDetailssPage', () => {
  let component: TodoDetailssPage;
  let fixture: ComponentFixture<TodoDetailssPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDetailssPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
