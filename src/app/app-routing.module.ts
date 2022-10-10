import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LevelSelectionComponent } from './components/level-selection/level-selection.component';
import { ScreenFourComponent } from './components/levels/one/screen-four/screen-four.component';
import { ScreenOneComponent } from './components/levels/one/screen-one/screen-one.component';
import { ScreenThreeComponent } from './components/levels/one/screen-three/screen-three.component';
import { ScreenTwoComponent } from './components/levels/one/screen-two/screen-two.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'fases', component: LevelSelectionComponent},
  {path: 'fase-1-1', component: ScreenOneComponent},
  {path: 'fase-1-2', component: ScreenTwoComponent},
  {path: 'fase-1-3', component: ScreenThreeComponent},
  {path: 'fase-1-4', component: ScreenFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
