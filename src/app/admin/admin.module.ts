import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LayoutComponent } from './container/layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './service/auth.service';
import { CheckService } from './service/check.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './container/header/header.component';
import { FooterComponent } from './container/footer/footer.component';


const routes: Routes = [
  { 
    path: '', 
    component: LayoutComponent,
    //canActivate: [AuthService],
    children: [
      {
        path: '', 
        component: DashboardComponent,
        canActivate: [CheckService]
      },
      {
        path: 'login', 
        component: LoginComponent,
        //canDeactivate:[AuthService]
      },
      {
        path: 'user', 
        //component: UserListComponent,
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
    FooterComponent],
  providers: [AuthService, CheckService]
})
export class AdminModule { }
