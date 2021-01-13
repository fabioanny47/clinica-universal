import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';
const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule'},
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule',canActivate: [NologinGuard] },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule'},
  { path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' },
  { path: 'hist', loadChildren: './hist/hist.module#HistPageModule',canActivate: [AuthGuard] },
  { path: 'registro', loadChildren:'./registro/registro.module#RegistroPageModule'},
  { path: 'details/:id', loadChildren: './todo-details/todo-details.module#TodoDetailsPageModule',canActivate: [AuthGuard] },
  { path: 'details', loadChildren: './todo-details/todo-details.module#TodoDetailsPageModule',canActivate: [AuthGuard] },
  { path: 'histo', loadChildren: './histo/histo.module#HistoPageModule' },
  { path: 'todo-detailss', loadChildren: './todo-detailss/todo-detailss.module#TodoDetailssPageModule'},
  { path: 'detailss/:id', loadChildren: './todo-detailss/todo-detailss.module#TodoDetailssPageModule'},
  { path: 'detailss', loadChildren: './todo-detailss/todo-detailss.module#TodoDetailssPageModule'},
  { path: 'detailse', loadChildren: './todo-detailse/todo-detailse.module#TodoDetailsePageModule' },
  { path: 'detailse/:id', loadChildren: './todo-detailse/todo-detailse.module#TodoDetailsePageModule' },
  { path: 'todo-detailse', loadChildren: './todo-detailse/todo-detailse.module#TodoDetailsePageModule'},
  { path: 'razon', loadChildren: './razon/razon.module#RazonPageModule' },
  
   

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
