import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index.html',
    pathMatch: 'full'
  },
  {
    path: 'index.html',
    loadChildren: () => import('./components/features/weather-view-component/weather-view-module.module').then(m => m.WeatherViewModuleModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./components/features/about-component/about.module').then(m => m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
