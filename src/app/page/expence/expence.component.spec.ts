import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenceComponent } from './expence.component';

describe('ExpenceComponent', () => {
  let component: ExpenceComponent;
  let fixture: ComponentFixture<ExpenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
