import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazonPage } from './razon.page';

describe('RazonPage', () => {
  let component: RazonPage;
  let fixture: ComponentFixture<RazonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
