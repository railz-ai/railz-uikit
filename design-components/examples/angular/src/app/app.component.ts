import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';
  sumList = [
    { first: 12, second: 10 },
    { first: 40, second: 50 },
    { first: 2, second: 3 },
    { first: null, second: 3 },
  ];
}
