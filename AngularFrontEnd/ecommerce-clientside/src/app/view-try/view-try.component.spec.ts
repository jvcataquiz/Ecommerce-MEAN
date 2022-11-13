import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTryComponent } from './view-try.component';

describe('ViewTryComponent', () => {
  let component: ViewTryComponent;
  let fixture: ComponentFixture<ViewTryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
