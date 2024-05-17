import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PomodoroComponent } from './components/pomodoro/pomodoro.component';
import { ButtonComponent } from './components/button/button.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MenuComponent } from './components/menu/menu.component';
import { AlertComponent } from './components/modals/alert/alert.component';
import { AboutComponent } from './components/about/about.component'

import { StorageService } from './models/storage/storage.service';
import { BridgeService } from './models/bridge/bridge.service';
import { WindowService } from './models/window/window.service';
import { EnvironmentService } from './models/environment/environment.service';
import { SliderComponent } from './components/slider/slider.component';
import { SliderListComponent } from './components/slider-list/slider-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    DashboardComponent,
    MenuComponent,
    PomodoroComponent,
    ButtonComponent,
    AlertComponent,
    AboutComponent,
    SliderComponent,
    SliderListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatSlideToggleModule,
  ],
  providers: [
    provideAnimationsAsync(),
    StorageService,
    BridgeService,
    WindowService,
    EnvironmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
