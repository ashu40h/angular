import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Founder {
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
}

@Component({
  selector: 'app-founder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './founder.component.html',
  styleUrls: ['./founder.component.css']
})
export class FounderComponent {
  founders = [
    {
      name: 'CA Ankush Sharma',
      title: 'Founder & Partner',
      photoUrl: 'https://lh6.googleusercontent.com/p5soeVatKClOU1v_7hIWYQpac40aF8I19c5AswBzaf3PtyNfUfYtOrb6KIhIEuKtGYSH7rrxizyMa1ymhk-FiuezZA_Nb_Sic4yqe4Dzxl0ECMzsp1InvrZg47t_MP4uSFcYGTDpPGWxMfG9OT-9nLhqwOPmrVXxoN9eQvvfRFNqHGh43P-DIA=w1280',
      bio: `CA Ankush Sharma is the founding partner of Sharma RK & Co and a highly regarded Chartered Accountant, known for his deep financial acumen and principled leadership. With a strong academic foundation—including a Chartered Accountancy credential from ICAI, an MBA, and a B.Com from the University of Madras—he brings a multidimensional perspective to financial strategy, governance, and regulatory consulting.

His professional journey spans globally recognized firms such as Ernst & Young (EY), TR Chadha & Co, and Khicha & Prabu Kesavan, where he refined his expertise in audit, taxation, and compliance across diverse industries. This combination of Big 4 discipline and mid-size firm agility positions him uniquely to navigate complex financial landscapes.

Renowned for his strategic foresight and commitment to ethical standards, CA Ankush Sharma has successfully led high-stakes audits for government bodies, PSUs, financial institutions, and corporates. His leadership is defined by a hands-on, solutions-driven approach that balances compliance with business impact—earning him the trust of clients seeking clarity, confidence, and long-term value in their financial operations.`
    }
  ];
}
