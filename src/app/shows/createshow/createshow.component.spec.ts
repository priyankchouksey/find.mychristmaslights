import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateshowComponent } from './createshow.component';

describe('CreateshowComponent', () => {
  let component: CreateshowComponent;
  let fixture: ComponentFixture<CreateshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
