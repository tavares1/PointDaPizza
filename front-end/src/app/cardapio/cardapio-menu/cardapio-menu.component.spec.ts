import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioMenuComponent } from './cardapio-menu.component';

describe('CardapioMenuComponent', () => {
  let component: CardapioMenuComponent;
  let fixture: ComponentFixture<CardapioMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapioMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
