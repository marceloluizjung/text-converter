import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent {

  textUtilsItems: any;

  responsiveOptions;

  constructor(private router: Router) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit() {
    this.textUtilsItems = [
      {
        name: 'Unicode Text Converter',
        description: 'Description',
        image:
          'https://play-lh.googleusercontent.com/eeqT5oAqwlaAmrELF5SSc6ol6scd4GxOgK7Hhfc6zgywGpZkhWkf2ddM8XFkOERto_ZK=w240-h480-rw',
      },
    ];
  }

  tryIt() {
    this.router.navigateByUrl("unicodetextconverter");
  }
}
