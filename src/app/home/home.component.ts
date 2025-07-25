import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoComponent } from "../todo/todo.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // ✅ fixed spelling here
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToTodo() {
    this.router.navigate(['/app-todo']); // ✅ navigate to the To-Do route
  }
}
