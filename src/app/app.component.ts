import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng-lts/api';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public tabMenuItems: MenuItem[];

  public activeItem: MenuItem;

  public isHome = true;

  private navigationSubscription: Subscription;

  constructor(private router: Router) {
    this.navigationSubscription = router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event && event.urlAfterRedirects.includes('home')) {
          this.isHome = true;
        } else {
          this.isHome = false;
          this.navigationSubscription.unsubscribe();
        }
      });
  }

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
