import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizecodeComponent } from './authorizecode.component';

describe('LoginComponent', () => {
  let component: AuthorizecodeComponent;
  let fixture: ComponentFixture<AuthorizecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
