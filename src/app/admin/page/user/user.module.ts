import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../../service';

const routes: Routes = [
  { 
    path: '', 
    component: UserListComponent,
    canActivate: [AuthGuardService],            
    data: {
      role: 'user-list'
    }
  },
  { 
    path: 'agregar', 
    component: UserFormComponent,
    canActivate: [AuthGuardService],
    data: {
      role: 'user-add'
    }
  },
  { 
    path: 'editar/:id', 
    component: UserFormComponent,
    canActivate: [AuthGuardService],
    data: {
      role: 'user-edit'
    }
  },
  { 
    path: 'detalle/:id', 
    component: UserDetailComponent,
    canActivate: [AuthGuardService],
    data: {
      role: 'user-detail'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [UserListComponent, UserFormComponent, UserDetailComponent]
})
export class UserModule { }
