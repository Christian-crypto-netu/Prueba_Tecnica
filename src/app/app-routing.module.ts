import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { SeriesComponent } from './components/series/series.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  { path: '', component:NavbarComponent, pathMatch: 'full'},
  { path: 'inicio-component', component:InicioComponent },
  { path: 'series-component', component:SeriesComponent},
  { path: 'peliculas-component', component:PeliculasComponent},
  { path: '**', component:NavbarComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
