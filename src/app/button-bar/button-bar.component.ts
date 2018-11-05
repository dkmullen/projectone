import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleListService } from '../services/articlelist.service';

@Component({
  selector: 'app-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.css']
})
export class ButtonBarComponent implements OnInit {

  constructor(protected router: Router, public articleList: ArticleListService) { }

  ngOnInit() {
  }

  randomArticle() {
    console.log('random')
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
