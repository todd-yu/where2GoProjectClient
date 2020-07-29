import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingGroupComponent } from './existing-group.component';

describe('ExistingGroupComponent', () => {
  let component: ExistingGroupComponent;
  let fixture: ComponentFixture<ExistingGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
