import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  sidenavMode: string;
  breakpoint: number = 1110;

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      if (event.target.innerWidth <= this.breakpoint) {
        this.opened = false;
        this.sidenavMode = 'over';
      } else {
        this.opened = true;
        this.sidenavMode = 'side';
      }
  }

  ngOnInit() {
    if (window.innerWidth <= this.breakpoint) {
      this.opened = false;
      this.sidenavMode = 'over';
    } else {
      this.opened = true;
      this.sidenavMode = 'side';
    }
  
    let currentTheme = window.localStorage.getItem('currentTheme');
    if (currentTheme) {
      document.getElementById('body').classList.add(currentTheme);
    } else {
      document.getElementById('body').classList.add('kurtz-theme');
    }
  }
}
