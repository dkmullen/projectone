import { Component, OnInit } from '@angular/core';
import { ArticleListService } from '../../../services/articlelist.service';

@Component({
  selector: 'app-accepting-the-whole-bible',
  templateUrl: './accepting-the-whole-bible.component.html',
  styleUrls: ['./accepting-the-whole-bible.component.css']
})
export class AcceptingTheWholeBibleComponent implements OnInit {
  public articles: any;

  constructor(private articleList: ArticleListService) { }

  ngOnInit() {
    this.articles = this.articleList.articles;

  }

}
