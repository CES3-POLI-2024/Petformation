/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VentasListComponent } from './ventas-list.component';

describe('VentasListComponent', () => {
  let component: VentasListComponent;
  let fixture: ComponentFixture<VentasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
