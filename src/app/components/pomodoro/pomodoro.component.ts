import { Component } from '@angular/core';
import { StorageService } from '../../models/storage/storage.service';
import { AlternateCycleOptions, Cycle } from '../../views/pomodoro';
import { EnvironmentService } from '../../models/environment/environment.service';

const DEFAULT_WORK_TIME_DURATION: number = 1500;
const DEFAULT_SHORT_BREAK_DURATION: number = 300;

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrl: './pomodoro.component.scss'
})
export class PomodoroComponent {

  storageSaver: any = null;
  at_work: boolean = false;
  cycles: Cycle[] = [
    { order: 0, id: 'work_time', label: 'Work time', duration: DEFAULT_WORK_TIME_DURATION, active: true },
    { order: 1, id: 'short_break', label: 'Short break', duration: DEFAULT_SHORT_BREAK_DURATION, active: false }
  ];

  constructor(
    private storage: StorageService,
    private env: EnvironmentService
  ) {
  }

  ngOnInit() {
    this.getStorage();
  }

  ngOnDestroy() {
    this.setStorage();
  }

  async getStorage(): Promise<void> {
    const response = await this.storage.get(this.env.STORAGE_KEYS.customodoro);
    if (response.success) {
      const savedCycles = response.storageData as Cycle[];
      this.cycles = savedCycles;
    }
  }

  setStorage(): void {
    this.storage.set(this.env.STORAGE_KEYS.customodoro, this.cycles);
  }

  get currentCycle(): Cycle | undefined {
    const current = this.cycles.find(cycle => cycle.active);
    return current;
  }

  get displayTimer() {
    const timer = new Date(0);
    timer.setSeconds(this.currentCycle?.duration || 0);
    return timer.toISOString().substring(14, 19);
  }

  workCycle(): void {
    if (!this.at_work || !this.currentCycle) {
      return;
    }

    this.currentCycle.duration -= 1;

    if (this.currentCycle.duration <= -1) {
      this.alternateCycle();

      if (this.env.NOTIFICATION_SETTINGS.notify) {
        this.notify();
      }

      if (this.env.NOTIFICATION_SETTINGS.sound) {
        this.playSound();
      }
    }

    setTimeout(() => {
      this.workCycle();
    }, 1000);
  }

  alternateCycle(): void {
    if (!this.currentCycle) {
      return;
    }

    let index = this.currentCycle.order;
    let next = index + 1;
    if (next >= 2) { next = 0 }

    this.cycles[next].active = true;
    this.cycles[index].duration = this.cycles[index].id == 'work_time' ?
      DEFAULT_WORK_TIME_DURATION :
      DEFAULT_SHORT_BREAK_DURATION;
    this.cycles[index].active = false;

    return;
  }

  playSound(): void {
    if (!this.env.NOTIFICATION_SETTINGS.notify || !this.env.NOTIFICATION_SETTINGS.sound || !this.currentCycle) {
      return;
    }

    let audio_file = this.currentCycle.id == 'short_break' ? 'short_break_start.mp3' : 'short_break_end.mp3';
    const audio = new Audio(`assets/${audio_file}`);
    audio.play();
  }

  notify(): void {
    if (!this.currentCycle) {
      return;
    }

    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    } else {
      new Notification('Cycle change', {
        body: this.currentCycle.id == 'short_break' ? 'Short break' : 'Work time',
        icon: 'assets/logo.png',
        tag: 'Pomodoro'
      });
    }
  }

  handleOnStart(_e: Event): void {
    if (this.at_work) {
      return;
    }
    this.at_work = true;
    this.workCycle();
    this.storageSaver = this.startStorageSaver();
    return;
  }

  startStorageSaver(): any {
    return setTimeout(() => {
      this.setStorage();
      this.storageSaver = this.startStorageSaver();
    }, 15000);
  }

  handleOnPause(_e: Event): void {
    this.at_work = false;
    clearTimeout(this.storageSaver);
    this.setStorage();
    return;
  }

  handleOnSkip(_e: Event): void {
    this.at_work = false;
    this.alternateCycle();

    if (this.env.NOTIFICATION_SETTINGS.notify) {
      this.notify();
    }

    if (this.env.NOTIFICATION_SETTINGS.soundOnSkip) {
      this.playSound();
    }

    clearTimeout(this.storageSaver);
    this.setStorage();
    return;
  }
}
