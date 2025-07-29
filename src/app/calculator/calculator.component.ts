import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tax-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class TaxCalculatorComponent {
  ctc: number | null = null;
  income: number = 0;
  tax: number = 0;
  showResult: boolean = false;

  calculateTax(): void {
    if (!this.ctc || this.ctc <= 0) {
      this.tax = 0;
      this.showResult = false;
      return;
    }

    this.income = this.ctc; // You can subtract standard deductions if needed
    let taxable = this.income;
    let calculatedTax = 0;

    // Slab-wise tax calculation for new regime
    const slabs = [
      { limit: 300000, rate: 0 },
      { limit: 300000, rate: 0.05 },
      { limit: 300000, rate: 0.1 },
      { limit: 300000, rate: 0.15 },
      { limit: 300000, rate: 0.2 },
      { limit: 300000, rate: 0.25 },
      { limit: Infinity, rate: 0.3 },
    ];

    let remaining = taxable;
    for (const slab of slabs) {
      const slabAmount = Math.min(slab.limit, remaining);
      calculatedTax += slabAmount * slab.rate;
      remaining -= slabAmount;
      if (remaining <= 0) break;
    }

    // Rebate under section 87A: If income <= ₹7,00,000 → full rebate
    // Your condition: Tax rebate if income <= ₹12,00,000 → full rebate
    if (this.income <= 1200000) {
      calculatedTax = 0;
    }

    this.tax = Math.round(calculatedTax);
    this.showResult = true;
  }
}
