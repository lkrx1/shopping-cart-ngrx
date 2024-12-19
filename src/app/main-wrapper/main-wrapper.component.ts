import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-wrapper',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './main-wrapper.component.html',
  styleUrl: './main-wrapper.component.scss',
})
export class MainWrapperComponent {}
