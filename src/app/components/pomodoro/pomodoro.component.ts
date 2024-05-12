import { Component } from '@angular/core';
import { Storage } from '../../models/storage/storage';
import { AppWindowActions } from '../../models/bridge/bridge';

const SOUND_ON: boolean = true;
const DEFAULT_WORK_TIME_DURATION: number = 1500;
const DEFAULT_SHORT_BREAK_DURATION: number = 300;

const POMODORO_STORAGE_KEY: string = "pomodoro_state";

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrl: './pomodoro.component.scss'
})
export class PomodoroComponent {

  constructor(
    private storage: Storage,
  ) {
  }

  ngOnInit() {
    this.getStorage();
    this.storage.setOnClose((windowActions: AppWindowActions) => {
      this.setStorage();
      windowActions.close();
    });
  }

  ngOnDestroy() {
    this.setStorage();
  }

  async getStorage(): Promise<void> {
    const response = await this.storage.get(POMODORO_STORAGE_KEY);
    if (response.success) {
      const savedCycles = response.storageData as Cycle[];
      this.cycles = savedCycles;
    }
  }

  setStorage(): void {
    this.storage.set(POMODORO_STORAGE_KEY, this.cycles);
  }

  at_work: boolean = false;
  cycles: Cycle[] = [
    { order: 0, id: 'work_time', label: 'Work time', duration: DEFAULT_WORK_TIME_DURATION, active: true },
    { order: 1, id: 'short_break', label: 'Short break', duration: DEFAULT_SHORT_BREAK_DURATION, active: false }
  ];

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
    }

    setTimeout(() => {
      this.workCycle();
    }, 1000);
  }

  alternateCycle(options: AlternateCycleOptions = { notify: true, sound: true }): void {
    if (!this.currentCycle) {
      return;
    }

    let index = this.currentCycle.order;
    let next = index + 1;
    if (next >= 2) { next = 0 }

    this.cycles[next].active = true;
    this.cycles[index].duration = this.cycles[index].id == 'work_time' ? DEFAULT_WORK_TIME_DURATION : DEFAULT_SHORT_BREAK_DURATION
    this.cycles[index].active = false;

    if (options.sound) {
      this.playSound();
    }
    if (options.notify) {
      this.notify();
    }

    return;
  }

  playSound(): void {
    if (!SOUND_ON || !this.currentCycle) {
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
    this.at_work = true;
    this.workCycle();
    return;
  }

  handleOnPause(_e: Event): void {
    this.at_work = false;
    return;
  }

  handleOnSkip(_e: Event): void {
    this.at_work = false;
    this.alternateCycle({ notify: true, sound: false });
    return;
  }
}

interface Cycle {
  order: number;
  id: string;
  label: string;
  duration: number;
  active: boolean;
}

interface AlternateCycleOptions {
  notify?: boolean;
  sound?: boolean;
}
