import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInfoReactiveComponent } from './task-info-reactive.component';

describe('TaskInfoReactiveComponent', () => {
  let component: TaskInfoReactiveComponent;
  let fixture: ComponentFixture<TaskInfoReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskInfoReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInfoReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
