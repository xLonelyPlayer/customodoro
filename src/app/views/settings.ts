export interface Settings {
  notification: SettingsNotification;
}

export interface SettingsNotification {
  notify: boolean;
  sound: boolean;
  soundOnSkip: boolean;
}
