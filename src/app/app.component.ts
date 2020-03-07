import {Component, ElementRef, HostListener, Output, Renderer2} from '@angular/core';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testAddEvent';

  constructor() { }
}
