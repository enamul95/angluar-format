import { Component, OnInit } from '@angular/core';
import { MenuModel } from 'src/app/model/menu-model';
import { AuthService } from 'src/app/services/auth.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  selectedItem?: number; // Assuming the item is identified by a numeric value


  menuList?: MenuModel[]
  constructor(
    private auth:AuthService,
    private menuService:MenuService){}

  ngOnInit(): void {
    this.getMeus()
  }

 selectItem(item: number): void {
  this.selectedItem = item;
}



  logout():void{
    this.auth.logout()
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
