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
    ScreenThreeLevelFiveComponent
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
