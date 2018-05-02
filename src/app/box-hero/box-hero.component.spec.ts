import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxHeroComponent } from './box-hero.component';

describe('BoxHeroComponent', () => {
  let component: BoxHeroComponent;
  let fixture: ComponentFixture<BoxHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
