import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  @Input() sidenav;

  public theme: any;
  public currentTheme: any;

  changeTheme() {
    this.currentTheme = document.getElementById('body').classList;
    this.theme = this.currentTheme[0]
    this.theme === 'kurtz-theme' ? this.theme = 'kurtz-dark-theme' : this.theme = 'kurtz-theme';
    document.getElementById('body').classList.remove(this.currentTheme);
    document.getElementById('body').classList.add(this.theme);      
    localStorage.setItem('currentTheme', this.theme);
  }
}
