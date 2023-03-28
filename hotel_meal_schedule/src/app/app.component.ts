import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Hotel Meal Schedule';

  onGuestAdded(guest) {

  }
}

export interface Guest {
  name: string;
  startDate: string;
  endDate: string;
}
