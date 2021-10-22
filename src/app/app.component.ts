import { Component } from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'open-world';

  public useDefault = false;

  public toggle(event: MatSlideToggleChange) {
    console.log('toggle', event.checked);
    this.useDefault = event.checked;
  }
}
