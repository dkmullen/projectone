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

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { PageoneComponent } from './pages/pageone/pageone.component';
import { PagetwoComponent } from './pages/pagetwo/pagetwo.component';
import { PagethreeComponent } from './pages/pagethree/pagethree/pagethree.component';
import { PagefourComponent } from './pages/pagefour/pagefour/pagefour.component';
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
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
    PagefourComponent,
    SidenavComponent,
    TopbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSidenavModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
