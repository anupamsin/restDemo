import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieUsingTemplateComponent } from './add-movie-using-template.component';

describe('AddMovieUsingTemplateComponent', () => {
  let component: AddMovieUsingTemplateComponent;
  let fixture: ComponentFixture<AddMovieUsingTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovieUsingTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieUsingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
