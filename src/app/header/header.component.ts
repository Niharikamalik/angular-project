import { Component } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone:true,
  imports: [MainMenuComponent]
})
export class HeaderComponent {

}
