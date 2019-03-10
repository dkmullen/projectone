import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { ArticleListService } from '../services/articlelist.service';

@Component({
  selector: 'app-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.css']
})
export class ButtonBarComponent implements OnInit {
  public articles: any;
  public currentUrl: string = '/';
  public urlIndex;

  constructor(protected router: Router, public articleList: ArticleListService,
    private location: Location) { }

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
    this.findCurrentPath();
    if (this.urlIndex === 0) {
      this.urlIndex = this.articles.length - 1;
    } else {
      this.urlIndex -= 1;
    }
    this.router.navigate(new Array('/').concat([this.articles[this.urlIndex]]))
  }
  nextArticle() {
    this.findCurrentPath();
    if (this.urlIndex === this.articles.length - 1) {
      this.urlIndex = 0;
    } else {
      this.urlIndex += 1;
    }
    this.router.navigate(new Array('/').concat([this.articles[this.urlIndex]]))
  }

  findCurrentPath() {
    if (this.location.path().length > 0) {
      this.currentUrl = this.location.path().substr(1);
      this.urlIndex = this.articles.indexOf(this.currentUrl);
    } else {
      this.urlIndex = 0;
    }
  }


}
