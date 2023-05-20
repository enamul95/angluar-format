import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';
import { MenuModel } from './model/menu-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'side-menu';

  menuList?: MenuModel[]

  constructor(
   
    private menuService:MenuService
    ){}

  ngOnInit(): void {
    
   // this.getMeus()
  }

  getMeus(){

    this.menuService.getMeus().subscribe({
      next:(res)=>{
       
        this.menuList = res

        console.log('menu-->'+this.menuList)
        },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  

}
