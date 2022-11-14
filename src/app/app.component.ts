import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng-lts/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public tabMenuItems: MenuItem[];

  public activeItem: MenuItem;

  public isHome = true;

  constructor() {}

  ngOnInit() {
    this.tabMenuItems = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home'] },
      {
        label: 'Unicode Text Converter',
        icon: 'pi pi-fw pi-globe',
        routerLink: ['/unicodetextconverter'],
      },
      {
        label: 'Text Regex',
        icon: 'pi pi-fw pi-ban',
        routerLink: ['/textregex'],
        disabled: true,
      },
      {
        label: 'About Us',
        icon: 'pi pi-fw pi-users',
        routerLink: ['/aboutus'],
      },
      {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        routerLink: ['/settings'],
        disabled: true,
      },
    ];
    this.activeItem = this.tabMenuItems[0];
  }
}
