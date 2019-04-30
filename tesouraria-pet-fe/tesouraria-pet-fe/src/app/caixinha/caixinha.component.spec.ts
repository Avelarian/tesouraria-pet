import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixinhaComponent } from './caixinha.component';

describe('CaixinhaComponent', () => {
  let component: CaixinhaComponent;
  let fixture: ComponentFixture<CaixinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
