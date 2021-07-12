import { Component } from '@angular/core';
import { AlertStatesEnum } from 'src/enums/alert-states-enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alertStatesEnum = AlertStatesEnum;
}
