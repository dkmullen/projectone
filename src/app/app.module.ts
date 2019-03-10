import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';


import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ButtonBarComponent } from './button-bar/button-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { PageoneComponent } from './pages/pageone/pageone.component';
import { YECComponent } from './pages/articles/yec/yec';
import { ShilohComponent } from './pages/book-notes/shiloh/shiloh.component';
import { GoToWarComponent } from './pages/book-notes/go-to-war/go-to-war.component';
import { BullComponent } from './pages/book-notes/bull/bull.component';
import { PhantomBlooperComponent } from './pages/book-notes/phantom-blooper/phantom-blooper.component';
import { MormonsComponent } from './pages/articles/mormons/mormons.component';

import { ArticleListService } from './services/articlelist.service';

const appRoutes: Routes = [
  { path: '', component: PageoneComponent },
  { path: 'tuesdays-with-mormons', component: MormonsComponent },
  { path: 'yec', component: YECComponent },
  { path: 'what-i-saw-of-shiloh', component: ShilohComponent },
  { path: 'the-phantom-blooper', component: PhantomBlooperComponent },
  { path: 'what-it-is-like-to-go-to-war', component: GoToWarComponent },
  { path: 'on-bull', component: BullComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PageoneComponent,
    SidenavComponent,
    TopbarComponent,
    ButtonBarComponent,
    ShilohComponent,
    GoToWarComponent,
    BullComponent,
    PhantomBlooperComponent,
    MormonsComponent,
    YECComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTooltipModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArticleListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
