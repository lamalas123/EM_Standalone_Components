import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-standalone-performance',
  standalone: true,
  imports: [],
  templateUrl: './standalone-performance.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandalonePerformanceComponent {
  standalonePerformanceImgSrc: string;
  nonStandalonePerformanceImgSrc: string;

  constructor() {
    this.standalonePerformanceImgSrc =
      'assets/img/performance/standalone-perf.png';
    this.nonStandalonePerformanceImgSrc =
      'assets/img/performance/non-standalone-perf.png';
  }
}
