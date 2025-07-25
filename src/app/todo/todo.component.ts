import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fee-estimator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  selectedService = '';
  turnover: number = 0;
  estimatedFee: number | null = null;

  services = [
    { name: 'GST Filing', rate: 0.01 },
    { name: 'Income Tax Return', rate: 0.015 },
    { name: 'Company Incorporation', rate: 0.02 },
    { name: 'Accounting & Bookkeeping', rate: 0.0125 },
  ];

  calculateFee() {
    const service = this.services.find(s => s.name === this.selectedService);
    if (service) {
      this.estimatedFee = this.turnover * service.rate;
    }
  }
}
