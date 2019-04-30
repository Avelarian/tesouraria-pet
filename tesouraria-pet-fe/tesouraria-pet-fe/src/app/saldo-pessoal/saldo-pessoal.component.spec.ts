import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoPessoalComponent } from './saldo-pessoal.component';

describe('SaldoPessoalComponent', () => {
  let component: SaldoPessoalComponent;
  let fixture: ComponentFixture<SaldoPessoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaldoPessoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldoPessoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
