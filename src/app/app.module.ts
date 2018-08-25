import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';



import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';


import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { PageoneComponent } from './pages/pageone/pageone.component';
import { ContentsComponent } from './contents/contents.component';
import { PagefourComponent } from './pages/pagefour/pagefour/pagefour.component';
import { PagethreeComponent } from './pages/pagethree/pagethree/pagethree.component';

const appRoutes: Routes = [
  { path: '', component: PageoneComponent },
  { path: 'pagethree', component: PagethreeComponent },
  { path: 'pagefour', component: PagefourComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    PageoneComponent,
    ContentsComponent,
    PagefourComponent,
    PagethreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
