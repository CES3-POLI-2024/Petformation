/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditCaluproductComponent } from './edit-caluproduct.component';

describe('EditCaluproductComponent', () => {
  let component: EditCaluproductComponent;
  let fixture: ComponentFixture<EditCaluproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCaluproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCaluproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
