import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistPage } from './hist.page';

describe('HistPage', () => {
  let component: HistPage;
  let fixture: ComponentFixture<HistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
