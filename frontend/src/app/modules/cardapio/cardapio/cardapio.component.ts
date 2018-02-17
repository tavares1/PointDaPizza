import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Comida} from './comida';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {
  private comidas;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const promise = this.http.get('http://localhost:3000/cardapio').toPromise();
    promise.then( res => this.comidas = res );
  }
}
