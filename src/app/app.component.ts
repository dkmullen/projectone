import { Component, HostListener, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  events: string[] = [];
  opened: boolean = true;

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      if (event.target.innerWidth < 1110) {
        this.opened = false;
      } else {
        this.opened = true;
      }
  }

  ngOnInit() {
    let currentTheme = window.localStorage.getItem('currentTheme');
    if (currentTheme) {
      document.getElementById('body').classList.add(currentTheme);
    } else {
      document.getElementById('body').classList.add('kurtz-theme');
    }
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
