import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { BottomComponent } from './bottom/bottom.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, BottomComponent],
  template: `
  <app-header></app-header> 
  <router-outlet></router-outlet>
  <app-bottom></app-bottom>`,
})
export class AppComponent {}
