import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioAlterarComponent } from './cardapio-alterar.component';

describe('CardapioAlterarComponent', () => {
  let component: CardapioAlterarComponent;
  let fixture: ComponentFixture<CardapioAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapioAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
