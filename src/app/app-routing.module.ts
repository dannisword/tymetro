import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AbnormalComponent } from './pages/abnormal/abnormal.component';
const routes: Routes = [

  {
    path: '',
    redirectTo: 'abnormal',
    pathMatch: 'full'
  },
  /*
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },*/
  {
    path: 'dashboards',
    loadChildren: () => import('./pages/dashboards/dashboards.module').then(m => m.DashboardsPageModule)
  },
  {
    path: 'abnormal',
    component: AbnormalComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
