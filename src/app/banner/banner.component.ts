import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() sidenav;
  constructor() { }

  ngOnInit() {
  }

  events: string[] = [];
  opened: boolean = true;

  toggle() {
    this.opened = !this.opened;
  }

}
