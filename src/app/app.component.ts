import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public tryIt = false;

  constructor() { }

  ngOnInit() {
  }

  public tryItOnPageHome() {
    this.tryIt = true;
  }
}
