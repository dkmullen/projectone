import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() sidenav;

  public theme: string;

  changeTheme(theme) {
    let currentTheme=document.getElementById('body').classList;
    document.getElementById('body').classList.remove(currentTheme[0]);
    document.getElementById('body').classList.add(theme);
    localStorage.setItem('currentTheme', theme);
  }
}
