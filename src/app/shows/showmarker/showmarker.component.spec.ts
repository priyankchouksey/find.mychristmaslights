import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmarkerComponent } from './showmarker.component';

describe('ShowmarkerComponent', () => {
  let component: ShowmarkerComponent;
  let fixture: ComponentFixture<ShowmarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
