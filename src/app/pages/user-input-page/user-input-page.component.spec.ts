import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputPageComponent } from './user-input-page.component';

describe('UserInputPageComponent', () => {
  let component: UserInputPageComponent;
  let fixture: ComponentFixture<UserInputPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInputPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
