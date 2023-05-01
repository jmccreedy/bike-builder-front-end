import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title: string = 'bike-builder-front-end';

  constructor() {
  }

  public ngOnInit(): void {
  }

}
