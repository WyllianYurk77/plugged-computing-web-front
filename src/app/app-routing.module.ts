import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LevelSelectionComponent } from './components/level-selection/level-selection.component';
import { ScreenOneComponent } from './components/levels/one/screen-one/screen-one.component';
import { ScreenTwoComponent } from './components/levels/one/screen-two/screen-two.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'fases', component: LevelSelectionComponent},
  {path: 'fase-1-1', component: ScreenOneComponent},
  {path: 'fase-1-2', component: ScreenTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
