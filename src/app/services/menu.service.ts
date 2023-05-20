import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuModel } from '../model/menu-model';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }



  getMeus():Observable<MenuModel[]>{
    return this.http.get<MenuModel[]>('http://localhost:8081/menu/menu-list')
  }

  // getMeus():Observable<any>{
  //   return this.http.get<any>('http://localhost:8081/menu/menu-list')
  // }


}
