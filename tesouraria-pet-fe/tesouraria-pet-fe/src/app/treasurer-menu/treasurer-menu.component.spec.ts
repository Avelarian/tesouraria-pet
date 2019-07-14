import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasurerMenuComponent } from './treasurer-menu.component';

describe('TreasurerMenuComponent', () => {
  let component: TreasurerMenuComponent;
  let fixture: ComponentFixture<TreasurerMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreasurerMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreasurerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
