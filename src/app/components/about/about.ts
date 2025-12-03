import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class About implements OnInit {
  particles: any[] = [];
  orbits: any[] = [];
  skills: string[] = [
    'DevOps & CI/CD',
    'Développement Backend',
    'Développement Frontend',
    'Docker & Containerisation',
    'Spring Boot',
    'Angular'
  ];
  stats: any[] = [
    { value: 12, label: 'Projets GitHub' },
    { value: 3, label: 'Années Expérience' },
    { value: 10, label: 'Technologies Maîtrisées' }
  ];
  textVisible: boolean = false;
  isHovered: boolean = false;

  ngOnInit(): void {
    this.generateParticles(25);
    this.generateOrbits(3);
    
    // Animation d'apparition du texte
    setTimeout(() => {
      this.textVisible = true;
    }, 500);
  }

  generateParticles(count: number): void {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        size: Math.random() * 5 + 2,
        top: Math.random() * 100,
        left: Math.random() * 100,
        animationDelay: Math.random() * 10
      });
    }
  }

generateOrbits(count: number): void {
  const sizes = [60, 90, 120]; // tailles personnalisées
  this.orbits = sizes.map(size => ({ size }));
}



  getSkillLevel(skill: string): number {
    const levels: { [key: string]: number } = {
      'DevOps & CI/CD': 90,
      'Développement Backend': 88,
      'Développement Frontend': 85,
      'Docker & Containerisation': 87,
      'Spring Boot': 89,
      'Angular': 86
    };
    return levels[skill] || 80;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.isHovered = true;
    
    const overlay = document.querySelector('.quantum-overlay') as HTMLElement;
    if (overlay) {
      overlay.style.setProperty('--x', `${event.clientX}px`);
      overlay.style.setProperty('--y', `${event.clientY}px`);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.isHovered = false;
  }
}