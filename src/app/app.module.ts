import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SettingsComponent } from './components/settings/settings.component';
import { ModalComponent } from './components/modal/modal.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './components/menu/menu.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    ModalComponent,
    DashboardComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
