import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarsettingComponent } from './avatarsetting.component';

describe('AvatarsettingComponent', () => {
  let component: AvatarsettingComponent;
  let fixture: ComponentFixture<AvatarsettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarsettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
