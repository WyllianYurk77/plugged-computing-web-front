import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LevelSelectionComponent } from './components/level-selection/level-selection.component';
import { ScreenFourLevelOneComponent } from './components/levels/one/screen-four-level-one/screen-four-level-one.component';
import { ScreenOneLevelOneComponent } from './components/levels/one/screen-one-level-one/screen-one-level-one.component';
import { ScreenThreeLevelOneComponent } from './components/levels/one/screen-three-level-one/screen-three-level-one.component';
import { ScreenTwoLevelOneComponent } from './components/levels/one/screen-two-level-one/screen-two-level-one.component';
import { ScreenOneLevelTwoComponent} from './components/levels/two/screen-one-level-two/screen-one-level-two.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'fases', component: LevelSelectionComponent},
  {path: 'fase-1-1', component: ScreenOneLevelOneComponent},
  {path: 'fase-1-2', component: ScreenTwoLevelOneComponent},
  {path: 'fase-1-3', component: ScreenThreeLevelOneComponent},
  {path: 'fase-1-4', component: ScreenFourLevelOneComponent},
  {path: 'fase-2-1', component: ScreenOneLevelTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
