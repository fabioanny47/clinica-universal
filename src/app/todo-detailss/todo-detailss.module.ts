import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TodoDetailssPage } from './todo-detailss.page';

const routes: Routes = [
  {
    path: '',
    component: TodoDetailssPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TodoDetailssPage]
})
export class TodoDetailssPageModule {}
 