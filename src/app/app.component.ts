import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  events: string[] = [];
  opened: boolean = true;

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      if (event.target.innerWidth < 855) {
        this.opened = false;
      } else {
        this.opened = true;
      }
  }
}
