import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesNavbarComponent } from './pages-navbar.component';

describe('PagesNavbarComponent', () => {
  let component: PagesNavbarComponent;
  let fixture: ComponentFixture<PagesNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
