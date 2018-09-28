import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployViewComponent } from './employ-view.component';

describe('EmployViewComponent', () => {
  let component: EmployViewComponent;
  let fixture: ComponentFixture<EmployViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
