import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentDevelopmentComponent } from './recent-development.component';

describe('RecentDevelopmentComponent', () => {
  let component: RecentDevelopmentComponent;
  let fixture: ComponentFixture<RecentDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
