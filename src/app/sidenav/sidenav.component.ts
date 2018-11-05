import { Component, Input, OnInit } from '@angular/core';

import { ArticleListService } from '../services/articlelist.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public articles: any;
  @Input() sidenav;

  constructor(public articleList: ArticleListService) {}

  ngOnInit() {
    this.articles = this.articleList.articles;
  }

  closeIfMoblie() {
    if (this.sidenav.mode === 'over') {
      this.sidenav.close();
    }
  }

}
