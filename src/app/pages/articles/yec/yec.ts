import { Component, OnInit } from '@angular/core';
import { ArticleListService } from '../../../services/articlelist.service';

@Component({
  selector: 'app-yec',
  templateUrl: './yec.html',
  styleUrls: []
})
export class YECComponent implements OnInit {
  public articles: any;

  constructor(private articleList: ArticleListService) { }

  ngOnInit() {
    this.articles = this.articleList.articles;
  }

}
