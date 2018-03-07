import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './container/layout/layout.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { Error404Component } from './page/error404/error404.component';

const routes: Routes = [
    { 
      path: '', 
      component: LayoutComponent,
      children: [
        {
          path: '', 
          component: HomeComponent
        },
        {
          path: 'about', 
          component: AboutComponent
        },
        {
          path: 'contact',
          component: ContactComponent
        }
      ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, LayoutComponent, AboutComponent, ContactComponent, Error404Component]
})
export class FrontModule { }
