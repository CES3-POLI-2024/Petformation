/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CaluproductsListComponent } from './caluproducts-list.component';

describe('CaluproductsListComponent', () => {
  let component: CaluproductsListComponent;
  let fixture: ComponentFixture<CaluproductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaluproductsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaluproductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
