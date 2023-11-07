import { DatePipe, NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, DatePipe, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  countdown: number;
  dateNow: Date;
  isPaused: boolean;
  interval: any;

  constructor(private cdr: ChangeDetectorRef, private router: Router) {
    this.countdown = 1200;
    this.dateNow = new Date();
    this.isPaused = true;
  }

  ngOnInit(): void {
    this.setInterval();
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }

  refreshCountdown(): void {
    this.countdown = 1200;
    this.isPaused = true;
    clearInterval(this.interval);
    this.setInterval();
  }

  togglePause(): void {
    this.isPaused = !this.isPaused;
    this.cdr.markForCheck();
  }

  goToMainRoute(): void {
    this.router.navigate(['/standalone/overview']);
  }

  private setInterval(): void {
    this.interval = setInterval(() => {
      if (!this.isPaused) {
        this.countdown--;
        this.cdr.markForCheck();
      }

      if (this.countdown === 0) {
        clearInterval(this.interval);
        this.cdr.markForCheck();
      }
    }, 1000);
  }
}
