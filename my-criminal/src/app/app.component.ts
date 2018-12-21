import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-criminal';
  date1 = new Date(2018, 7, 3);
  date2 = new Date(2017, 6, 14);
  date3 = new Date(2017, 7, 11);
  date4 = new Date(2015, 7, 1);
}
