import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom',
  standalone: true,
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent {
  currentYear: number = new Date().getFullYear();
}
