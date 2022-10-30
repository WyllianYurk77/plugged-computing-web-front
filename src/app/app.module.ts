import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    ScreenTwoLevelTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
