import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  @Input() sidenav;

  public theme: string;

  changeTheme(theme) {
    let currentTheme=document.getElementById('body').classList;
    document.getElementById('body').classList.remove(currentTheme[0]);
    document.getElementById('body').classList.add(theme);
    localStorage.setItem('currentTheme', theme);
  }
}
