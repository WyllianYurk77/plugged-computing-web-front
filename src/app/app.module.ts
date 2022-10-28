import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LevelSelectionComponent } from './components/level-selection/level-selection.component';
import { ScreenOneComponent } from './components/levels/one/screen-one/screen-one.component';
import { ScreenTwoComponent } from './components/levels/one/screen-two/screen-two.component';
import { ScreenThreeComponent } from './components/levels/one/screen-three/screen-three.component';
import { ScreenFourComponent } from './components/levels/one/screen-four/screen-four.component';
import { ToastContainer } from './components/levels/toast-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LevelSelectionComponent,
    ScreenOneComponent,
    ScreenTwoComponent,
    ScreenThreeComponent,
    ScreenFourComponent,
    ToastContainer
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
