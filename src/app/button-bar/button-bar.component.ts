import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleListService } from '../services/articlelist.service';

@Component({
  selector: 'app-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.css']
})
export class ButtonBarComponent implements OnInit {
  public articles: any;

  constructor(protected router: Router, public articleList: ArticleListService) { }

  ngOnInit() {
    this.articles = this.articleList.articles;
  }

  randomArticle() {
    // Pick a number between 1 and the list length minus one (don't want 0, the intro page)
    let min = 1;
    let max = this.articles.length - 1;
    let n = Math.floor(Math.random() * max + min);
    this.router.navigate(new Array('/').concat([this.articles[n]])); 
  }
  
  pageOne() {
    this.router.navigate(new Array('/'));
  }
  
  previousArticle() {
    console.log('previous');
  }
  nextArticle() {
    console.log('next');
  }


}
