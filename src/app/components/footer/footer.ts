import { CommonModule } from '@angular/common';
import { Component , OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
   standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit {
  particles: any[] = [];
  orbits: any[] = [];
  isHovered: boolean = false;
  quantumStateStyle: any = {};
  
  socialLinks = [
    { 
      name: 'LinkedIn', 
      iconClass: 'fab fa-linkedin-in',
      link: 'https://www.linkedin.com/in/bouhabba-imane-956a82386/'
    },
    { 
      name: 'GitHub', 
      iconClass: 'fab fa-github',
      link: 'https://github.com/vixi-max'
    }
  ];

  ngOnInit(): void {
    this.generateParticles(12);
    this.generateOrbits(4);
  }

  generateParticles(count: number): void {
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 4 + 1;
      this.particles.push({
        style: {
          'top': `${Math.random() * 100}%`,
          'left': `${Math.random() * 100}%`,
          'width': `${size}px`,
          'height': `${size}px`,
          'animation-delay': `${Math.random() * 15}s`
        }
      });
    }
  }

  generateOrbits(count: number): void {
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 60 + 20;
      this.orbits.push({
        style: {
          'top': `${Math.random() * 100}%`,
          'left': `${Math.random() * 100}%`,
          'width': `${size}px`,
          'height': `${size}px`,
          'animation-delay': `${Math.random() * 5}s`,
          'animation-duration': `${Math.random() * 30 + 15}s`,
          'animation-direction': i % 2 === 0 ? 'normal' : 'reverse'
        }
      });
    }
  }

  onMouseMove(event: MouseEvent): void {
    this.quantumStateStyle = {'--x': `${event.offsetX}px`, '--y': `${event.offsetY}px`};
  }

  onLinkHover(event: MouseEvent, social: any): void {
    this.isHovered = true;
    this.quantumStateStyle = {'--x': `${event.offsetX}px`, '--y': `${event.offsetY}px`};
  }

  onLinkLeave(): void {
    this.isHovered = false;
  }

  // Gestion du redimensionnement pour s'adapter aux différentes tailles d'écran
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    // Réinitialiser et régénérer les particules et orbites pour s'adapter à la nouvelle taille
    this.particles = [];
    this.orbits = [];
    this.generateParticles(12);
    this.generateOrbits(4);
  }
}