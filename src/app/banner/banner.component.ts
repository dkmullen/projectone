import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() sidenav;

  opened: boolean = true;

  toggle() {
    this.opened = !this.opened;
  }

}
