import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGroupPageComponent } from './main-group-page.component';

describe('MainGroupPageComponent', () => {
  let component: MainGroupPageComponent;
  let fixture: ComponentFixture<MainGroupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGroupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
