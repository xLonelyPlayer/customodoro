import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PomodoroComponent } from './components/pomodoro/pomodoro.component';
import { ButtonComponent } from './components/button/button.component';

import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './components/menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertComponent } from './components/modals/alert/alert.component';
import { AboutComponent } from './components/about/about.component'

import { Storage } from './models/storage/storage';
import { Bridge } from './models/bridge/bridge';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
  ],
  providers: [
    provideAnimationsAsync(),
    Storage,
    Bridge
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
