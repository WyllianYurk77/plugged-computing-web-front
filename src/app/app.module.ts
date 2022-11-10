import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LevelSelectionComponent } from './components/level-selection/level-selection.component';
import { ScreenFourLevelOneComponent } from './components/levels/one/screen-four-level-one/screen-four-level-one.component';
import { ScreenOneLevelOneComponent } from './components/levels/one/screen-one-level-one/screen-one-level-one.component';
import { ScreenThreeLevelOneComponent } from './components/levels/one/screen-three-level-one/screen-three-level-one.component';
import { ScreenTwoLevelOneComponent } from './components/levels/one/screen-two-level-one/screen-two-level-one.component';
import { ToastContainer } from './components/levels/toast-container.component';
import { ScreenOneLevelTwoComponent } from './components/levels/two/screen-one-level-two/screen-one-level-two.component';
import { ScreenTwoLevelTwoComponent } from './components/levels/two/screen-two-level-two/screen-two-level-two.component';
import { ScreenThreeLevelTwoComponent } from './components/levels/two/screen-three-level-two/screen-three-level-two.component';
import { ScreenFourLevelTwoComponent } from './components/levels/two/screen-four-level-two/screen-four-level-two.component';
import { ScreenOneLevelThreeComponent } from './components/levels/three/screen-one-level-three/screen-one-level-three.component';
import { ScreenTwoLevelThreeComponent } from './components/levels/three/screen-two-level-three/screen-two-level-three.component';
import { ScreenThreeLevelThreeComponent } from './components/levels/three/screen-three-level-three/screen-three-level-three.component';
import { ScreenFourLevelThreeComponent } from './components/levels/three/screen-four-level-three/screen-four-level-three.component';
import { ScreenOneLevelFourComponent } from './components/levels/four/screen-one-level-four/screen-one-level-four.component';
import { ScreenTwoLevelFourComponent } from './components/levels/four/screen-two-level-four/screen-two-level-four.component';
import { ScreenThreeLevelFourComponent } from './components/levels/four/screen-three-level-four/screen-three-level-four.component';
import { ScreenFourLevelFourComponent } from './components/levels/four/screen-four-level-four/screen-four-level-four.component';
import { ScreenOneLevelFiveComponent } from './components/levels/five/screen-one-level-five/screen-one-level-five.component';
import { ScreenTwoLevelFiveComponent } from './components/levels/five/screen-two-level-five/screen-two-level-five.component';
import { ScreenThreeLevelFiveComponent } from './components/levels/five/screen-three-level-five/screen-three-level-five.component';
import { ScreenFourLevelFiveComponent } from './components/levels/five/screen-four-level-five/screen-four-level-five.component';
import { ScreenOneLevelSixComponent } from './components/levels/six/screen-one-level-six/screen-one-level-six.component';
import { ScreenTwoLevelSixComponent } from './components/levels/six/screen-two-level-six/screen-two-level-six.component';
import { ScreenThreeLevelSixComponent } from './components/levels/six/screen-three-level-six/screen-three-level-six.component';
import { ScreenFourLevelSixComponent } from './components/levels/six/screen-four-level-six/screen-four-level-six.component';
import { ScreenOneLevelSevenComponent } from './components/levels/seven/screen-one-level-seven/screen-one-level-seven.component';
import { ScreenTwoLevelSevenComponent } from './components/levels/seven/screen-two-level-seven/screen-two-level-seven.component';
import { ScreenThreeLevelSevenComponent } from './components/levels/seven/screen-three-level-seven/screen-three-level-seven.component';
import { ScreenOneLevelEightComponent } from './components/levels/eight/screen-one-level-eight/screen-one-level-eight.component';
import { ScreenTwoLevelEightComponent } from './components/levels/eight/screen-two-level-eight/screen-two-level-eight.component';
import { ScreenThreeLevelEightComponent } from './components/levels/eight/screen-three-level-eight/screen-three-level-eight.component';
import { ScreenFourLevelEightComponent } from './components/levels/eight/screen-four-level-eight/screen-four-level-eight.component';
import { ScreenFiveLevelEightComponent } from './components/levels/eight/screen-five-level-eight/screen-five-level-eight.component';
import { ScreenSixLevelEightComponent } from './components/levels/eight/screen-six-level-eight/screen-six-level-eight.component';
import { ScreenSevenLevelEightComponent } from './components/levels/eight/screen-seven-level-eight/screen-seven-level-eight.component';
import { ScreenEightLevelEightComponent } from './components/levels/eight/screen-eight-level-eight/screen-eight-level-eight.component';
import { ScreenNineLevelEightComponent } from './components/levels/eight/screen-nine-level-eight/screen-nine-level-eight.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LevelSelectionComponent,
    ScreenOneLevelOneComponent,
    ScreenTwoLevelOneComponent,
    ScreenThreeLevelOneComponent,
    ScreenFourLevelOneComponent,
    ToastContainer,
    ScreenOneLevelTwoComponent,
    ScreenTwoLevelTwoComponent,
    ScreenThreeLevelTwoComponent,
    ScreenFourLevelTwoComponent,
    ScreenOneLevelThreeComponent,
    ScreenTwoLevelThreeComponent,
    ScreenThreeLevelThreeComponent,
    ScreenFourLevelThreeComponent,
    ScreenOneLevelFourComponent,
    ScreenTwoLevelFourComponent,
    ScreenThreeLevelFourComponent,
    ScreenFourLevelFourComponent,
    ScreenOneLevelFiveComponent,
    ScreenTwoLevelFiveComponent,
    ScreenThreeLevelFiveComponent,
    ScreenFourLevelFiveComponent,
    ScreenOneLevelSixComponent,
    ScreenTwoLevelSixComponent,
    ScreenThreeLevelSixComponent,
    ScreenFourLevelSixComponent,
    ScreenOneLevelSevenComponent,
    ScreenTwoLevelSevenComponent,
    ScreenThreeLevelSevenComponent,
    ScreenOneLevelEightComponent,
    ScreenTwoLevelEightComponent,
    ScreenThreeLevelEightComponent,
    ScreenFourLevelEightComponent,
    ScreenFiveLevelEightComponent,
    ScreenSixLevelEightComponent,
    ScreenSevenLevelEightComponent,
    ScreenEightLevelEightComponent,
    ScreenNineLevelEightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
