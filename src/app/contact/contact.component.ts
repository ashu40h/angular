import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      }
    }).then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        form.reset();
        this.router.navigate(['']);
      } else {
        alert('Failed to send message.');
      }
    }).catch(() => {
      alert('Something went wrong. Please try again later.');
    });
  }
}
