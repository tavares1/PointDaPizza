import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioExcluirComponent } from './cardapio-excluir.component';

describe('CardapioExcluirComponent', () => {
  let component: CardapioExcluirComponent;
  let fixture: ComponentFixture<CardapioExcluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapioExcluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
