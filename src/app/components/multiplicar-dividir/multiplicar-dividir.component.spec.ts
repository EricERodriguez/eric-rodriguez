import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicarDividirComponent } from './multiplicar-dividir.component';

describe('MultiplicarDividirComponent', () => {
  let component: MultiplicarDividirComponent;
  let fixture: ComponentFixture<MultiplicarDividirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplicarDividirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicarDividirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
