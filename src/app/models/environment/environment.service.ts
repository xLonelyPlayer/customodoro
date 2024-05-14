import { Injectable } from '@angular/core';
import { StorageKeys } from '../../views/environment';
import { SettingsNotification } from '../../views/settings';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  public STORAGE_KEYS: StorageKeys = {
    customodoro: "pomodoro_state",
    settings: "pomodoro_settings",
  }

  public NOTIFICATION_SETTINGS: SettingsNotification = {
    notify: true,
    sound: true,
    soundOnSkip: false,
  };

  constructor(
    private storage: StorageService
  ) {
    this.setNotificationSettings();
  }

  async setNotificationSettings() {
    const response = await this.storage.get(this.STORAGE_KEYS.settings);
    if (response.success) {
      this.NOTIFICATION_SETTINGS = response.storageData.notification as SettingsNotification;
    }
  }

}
