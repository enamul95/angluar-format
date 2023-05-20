import { Component, OnInit } from '@angular/core';
import { MenuModel } from 'src/app/model/menu-model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit{

  menuList?: MenuModel[]

  constructor(
   
    private menuService:MenuService
    ){}

  ngOnInit(): void {
    
    this.getMeus()
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
