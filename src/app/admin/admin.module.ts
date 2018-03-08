import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LayoutComponent } from './container/layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService, AuthGuardService } from './service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './container/header/header.component';
import { FooterComponent } from './container/footer/footer.component';



const routes: Routes = [
  { 
    path: '', 
    component: LayoutComponent,
    //canActivate: [CheckService],
    children: [
      {
        path: '', 
        component: DashboardComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'login', 
        component: LoginComponent
      },
      {
        path: 'user', 
        loadChildren: './page/user/user.module#UserModule'
      }
    ]
  }
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [
    LoginComponent, 
    DashboardComponent, 
    LayoutComponent, 
    HeaderComponent, 
    FooterComponent
  ],
  providers: [
    AuthService, 
    AuthGuardService
  ]
})
export class AdminModule { }
