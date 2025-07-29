import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-news',
  standalone: true,
  imports: [],
  templateUrl: './admin-news.component.html',
  styleUrl: './admin-news.component.css'
})
export class AdminNewsComponent {
  newPost = {
    title: '',
    content: ''
  };

  submitPost() {
    const savedPost = {
      ...this.newPost,
      date: new Date()
    };
    console.log('Post to save:', savedPost);
    // TODO: Send to backend / localStorage for now
    this.newPost = { title: '', content: '' };
  }
}

