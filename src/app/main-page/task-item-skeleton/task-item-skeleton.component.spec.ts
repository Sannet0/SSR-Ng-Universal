import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemSkeletonComponent } from './task-item-skeleton.component';

describe('TaskItemSkeletonComponent', () => {
  let component: TaskItemSkeletonComponent;
  let fixture: ComponentFixture<TaskItemSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskItemSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItemSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
