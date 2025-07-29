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
      photoUrl: 'assets/images/DSC_6394.JPG',
      bio: `CA Ankush Sharma is the founding partner of Sharma RK & Co and a highly regarded Chartered Accountant, known for his deep financial acumen and principled leadership. With a strong academic foundation—including a Chartered Accountancy credential from ICAI, an MBA, and a B.Com from the University of Madras—he brings a multidimensional perspective to financial strategy, governance, and regulatory consulting.

His professional journey spans globally recognized firms such as Ernst & Young (EY), TR Chadha & Co, and Khicha & Prabu Kesavan, where he refined his expertise in audit, taxation, and compliance across diverse industries. This combination of Big 4 discipline and mid-size firm agility positions him uniquely to navigate complex financial landscapes.

Renowned for his strategic foresight and commitment to ethical standards, CA Ankush Sharma has successfully led high-stakes audits for government bodies, PSUs, financial institutions, and corporates. His leadership is defined by a hands-on, solutions-driven approach that balances compliance with business impact—earning him the trust of clients seeking clarity, confidence, and long-term value in their financial operations.`
    ,
  message: `Message from the Founder – CA Ankush Sharma

At Sharma RK & Co, our vision is rooted in a steadfast commitment to delivering integrity-led, insight-driven, and dependable financial solutions that enable our clients to thrive with confidence. In today’s dynamic regulatory and business environment, we combine deep technical proficiency with pragmatic, client-centric strategies tailored to each unique challenge.

Our firm is anchored in the core values of trust, accountability, and excellence. These principles guide everything we do—from the quality of our services to the strength of our client relationships. Every professional at Sharma RK & Co upholds this ethos, working collaboratively to consistently exceed expectations through dedication, expertise, and ethical practice.

We are grateful for the trust you place in us. It is our privilege to serve as your trusted advisors and partners on the path to sustained success.`}
  ];
}
