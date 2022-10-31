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
    ScreenTwoLevelThreeComponent
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
