import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StorageService } from '../../models/storage/storage.service';

const POMODORO_STORAGE_KEY: string = "pomodoro_settings";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  form: FormGroup;

  constructor(private storage: StorageService) {
    this.form = new FormGroup({
      notification: new FormGroup({
        active: new FormControl(true),
        sound: new FormControl(true),
      })
    });
  }

  save(): void {
    debugger;
    return;
  }

}
