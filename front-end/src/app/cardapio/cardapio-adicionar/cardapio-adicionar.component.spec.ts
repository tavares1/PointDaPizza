import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioAdicionarComponent } from './cardapio-adicionar.component';

describe('CardapioAdicionarComponent', () => {
  let component: CardapioAdicionarComponent;
  let fixture: ComponentFixture<CardapioAdicionarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapioAdicionarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
