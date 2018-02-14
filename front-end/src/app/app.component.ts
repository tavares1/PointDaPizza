import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _http: HttpClient){
  }

  ngOnInit(){
    this._http.get("http://localhost:3000/cardapio").toPromise().then(res => console.log(res))
  }
}
