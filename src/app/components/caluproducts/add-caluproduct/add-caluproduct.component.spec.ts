/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddCaluproductComponent } from './add-caluproduct.component';

describe('AddCaluproductComponent', () => {
  let component: AddCaluproductComponent;
  let fixture: ComponentFixture<AddCaluproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCaluproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCaluproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
