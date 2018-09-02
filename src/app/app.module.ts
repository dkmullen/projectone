import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';


import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { PageoneComponent } from './pages/pageone/pageone.component';
import { PagetwoComponent } from './pages/pagetwo/pagetwo.component';
import { PagefourComponent } from './pages/pagefour/pagefour/pagefour.component';
import { PagethreeComponent } from './pages/pagethree/pagethree/pagethree.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const appRoutes: Routes = [
  { path: '', component: PageoneComponent },
  { path: 'pagetwo', component: PagetwoComponent },
  { path: 'pagethree', component: PagethreeComponent },
  { path: 'pagefour', component: PagefourComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    PageoneComponent,
    PagefourComponent,
    PagethreeComponent,
    SidenavComponent,
    PagetwoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
