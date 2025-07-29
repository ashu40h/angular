import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoComponent } from "../todo/todo.component";
import { DatePipe } from '@angular/common';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {  OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoComponent,DatePipe, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'
  ]  // ✅ fixed spelling here
})
export class HomeComponent {

  screenWidth: number = 0;

  goToTodo() {
    this.router.navigate(['/app-todo']); // ✅ navigate to the To-Do route
  }
  newsPosts: any[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    const url = 'https://raw.githubusercontent.com/ashu40h/files/main/news.json';
    this.screenWidth = window.innerWidth;
    console.log('Screen width:', this.screenWidth);

    console.log('Initial screen width:', this.screenWidth);
    this.http.get<any[]>(url).subscribe(
      data => this.newsPosts = data,
      error => console.error('Error loading posts:', error)

    );
  }
  get newsDuration() {
    return `${this.newsPosts.length * 4}s`; // auto sets scroll speed
  }

}
