import { Component, OnInit } from '@angular/core';
import { Pedido } from './pedido';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  private pedidos;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let promise = this.http.get("http://localhost:3000/pedido").toPromise()
    promise.then( res => this.pedidos = res);
  }

}
