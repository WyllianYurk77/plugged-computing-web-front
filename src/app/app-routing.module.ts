import { ScreenFourLevelFourComponent } from './components/levels/four/screen-four-level-four/screen-four-level-four.component';
import { ScreenThreeLevelFourComponent } from './components/levels/four/screen-three-level-four/screen-three-level-four.component';
import { ScreenOneLevelFourComponent } from './components/levels/four/screen-one-level-four/screen-one-level-four.component';
import { ScreenFourLevelThreeComponent } from './components/levels/three/screen-four-level-three/screen-four-level-three.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LevelSelectionComponent } from './components/level-selection/level-selection.component';
import { ScreenFourLevelOneComponent } from './components/levels/one/screen-four-level-one/screen-four-level-one.component';
import { ScreenOneLevelOneComponent } from './components/levels/one/screen-one-level-one/screen-one-level-one.component';
import { ScreenThreeLevelOneComponent } from './components/levels/one/screen-three-level-one/screen-three-level-one.component';
import { ScreenTwoLevelOneComponent } from './components/levels/one/screen-two-level-one/screen-two-level-one.component';
import { ScreenOneLevelThreeComponent } from './components/levels/three/screen-one-level-three/screen-one-level-three.component';
import { ScreenThreeLevelThreeComponent } from './components/levels/three/screen-three-level-three/screen-three-level-three.component';
import { ScreenTwoLevelThreeComponent } from './components/levels/three/screen-two-level-three/screen-two-level-three.component';
import { ScreenFourLevelTwoComponent } from './components/levels/two/screen-four-level-two/screen-four-level-two.component';
import { ScreenOneLevelTwoComponent } from './components/levels/two/screen-one-level-two/screen-one-level-two.component';
import { ScreenThreeLevelTwoComponent } from './components/levels/two/screen-three-level-two/screen-three-level-two.component';
import { ScreenTwoLevelTwoComponent } from './components/levels/two/screen-two-level-two/screen-two-level-two.component';
import { ScreenTwoLevelFourComponent } from './components/levels/four/screen-two-level-four/screen-two-level-four.component';
import { ScreenOneLevelFiveComponent } from './components/levels/five/screen-one-level-five/screen-one-level-five.component';
import { ScreenTwoLevelFiveComponent } from './components/levels/five/screen-two-level-five/screen-two-level-five.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'fases', component: LevelSelectionComponent},
  {path: 'fase-1-1', component: ScreenOneLevelOneComponent},
  {path: 'fase-1-2', component: ScreenTwoLevelOneComponent},
  {path: 'fase-1-3', component: ScreenThreeLevelOneComponent},
  {path: 'fase-1-4', component: ScreenFourLevelOneComponent},
  {path: 'fase-2-1', component: ScreenOneLevelTwoComponent},
  {path: 'fase-2-2', component: ScreenTwoLevelTwoComponent},
  {path: 'fase-2-3', component: ScreenThreeLevelTwoComponent},
  {path: 'fase-2-4', component: ScreenFourLevelTwoComponent},
  {path: 'fase-3-1', component: ScreenOneLevelThreeComponent},
  {path: 'fase-3-2', component: ScreenTwoLevelThreeComponent},
  {path: 'fase-3-3', component: ScreenThreeLevelThreeComponent},
  {path: 'fase-3-4', component: ScreenFourLevelThreeComponent},
  {path: 'fase-4-1', component: ScreenOneLevelFourComponent},
  {path: 'fase-4-2', component: ScreenTwoLevelFourComponent},
  {path: 'fase-4-3', component: ScreenThreeLevelFourComponent},
  {path: 'fase-4-4', component: ScreenFourLevelFourComponent},
  {path: 'fase-5-1', component: ScreenOneLevelFiveComponent},
  {path: 'fase-5-2', component: ScreenTwoLevelFiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
