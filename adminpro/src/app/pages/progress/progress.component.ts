import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  progreso1: number = 25;
  progreso2: number = 85;

  get getProgreso1() {
    return `${this.progreso1}%`;
  }
  get getProgreso2() {
    return `${this.progreso2}%`;
  }
}
