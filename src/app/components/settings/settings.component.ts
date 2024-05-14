import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StorageService } from '../../models/storage/storage.service';
import { EnvironmentService } from '../../models/environment/environment.service';
import { Settings } from '../../views/settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  form: FormGroup;

  constructor(
    private storage: StorageService,
    private env: EnvironmentService
  ) {
    this.form = new FormGroup({
      notification: new FormGroup({
        notify: new FormControl(true),
        sound: new FormControl(true),
        soundOnSkip: new FormControl(false),
      })
    });
  }

  ngOnInit() {
    this.getStorage();
  }

  async getStorage(): Promise<void> {
    const response = await this.storage.get(this.env.STORAGE_KEYS.settings);
    if (response.success) {
      const storageForm = response.storageData as Settings;
      this.setStorageForm(storageForm);
    }
  }

  setStorage(): void {
    this.storage.set(this.env.STORAGE_KEYS.settings, this.form.value);
  }

  submit(): void {
    this.setStorage();
    this.env.setNotificationSettings();
  }

  setStorageForm(storageForm: Settings): void {
    const { notification } = storageForm;

    if (notification) {
      const {
        notify = true,
        sound = true,
        soundOnSkip = false
      } = notification;

      const formNotification = this.form.get('notification');
      formNotification?.get('notify')?.setValue(notify);
      formNotification?.get('sound')?.setValue(sound);
      formNotification?.get('soundOnSkip')?.setValue(soundOnSkip);
    }

  }

}
