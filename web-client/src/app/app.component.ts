import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentDate: Date = new Date();

  public refreshDate() {
    this.currentDate = new Date();
  }
}
