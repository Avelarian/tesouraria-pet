import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CofreComponent } from './cofre.component';

describe('CofreComponent', () => {
  let component: CofreComponent;
  let fixture: ComponentFixture<CofreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CofreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CofreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
