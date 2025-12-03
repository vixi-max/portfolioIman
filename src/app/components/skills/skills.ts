import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class Skills {
  // Particules pour l'effet quantique
  particles: any[] = [];
  
  // Catégories de compétences
  skillCategories = [
    {
      name: 'Développement Frontend',
      icon: '💻',
      skills: [
        { name: 'Angular', level: 86, color: '#dd0031' },
        { name: 'TypeScript', level: 88, color: '#3178c6' },
        { name: 'JavaScript', level: 90, color: '#f7df1e' },
        { name: 'HTML/CSS/SCSS', level: 92, color: '#e34f26' },
        { name: 'Bootstrap', level: 85, color: '#7952b3' }
      ]
    },
    {
      name: 'Développement Backend',
      icon: '⚙️',
      skills: [
        { name: 'Java', level: 88, color: '#ed8b00' },
        { name: 'Spring Boot', level: 89, color: '#6db33f' },
        { name: 'C++', level: 85, color: '#00599c' },
        { name: 'REST API', level: 90, color: '#ff6b6b' },
        { name: 'MySQL', level: 87, color: '#4479a1' },
        { name: 'MongoDB', level: 82, color: '#47a248' }
      ]
    },
    {
      name: 'DevOps & CI/CD',
      icon: '🚀',
      skills: [
        { name: 'GitLab CI/CD', level: 90, color: '#fc6d26' },
        { name: 'Docker', level: 87, color: '#2496ed' },
        { name: 'Docker Registry', level: 85, color: '#2496ed' },
        { name: 'Git', level: 92, color: '#f05032' },
        { name: 'SSH Deploy', level: 88, color: '#4ecdc4' },
        { name: 'SSL/HTTPS', level: 83, color: '#7b68ee' }
      ]
    }
  ];

  // Compétences principales en vedette
  featuredSkills = [
    { name: 'DevOps & CI/CD', level: 90, years: 2, projects: 5 },
    { name: 'Spring Boot', level: 89, years: 3, projects: 8 },
    { name: 'Angular', level: 86, years: 3, projects: 12 },
    { name: 'Docker', level: 87, years: 2, projects: 6 }
  ];

  // Statistiques
  stats = [
    { number: 12, label: 'Projets GitHub', icon: '🚀' },
    { number: 3, label: 'Années d\'Expérience', icon: '⏳' },
    { number: 20, label: 'Technologies Maîtrisées', icon: '💡' },
    { number: 1, label: 'Pipeline CI/CD Production', icon: '✨' }
  ];

  constructor() {
    this.generateParticles(20);
  }

  // Génération des particules quantiques
  generateParticles(count: number): void {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        size: Math.random() * 4 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        animationDelay: Math.random() * 8,
        duration: Math.random() * 10 + 10
      });
    }
  }

  // Obtenir la largeur de la barre de progression
  getProgressWidth(level: number): string {
    return `${level}%`;
  }

  // Animation d'entrée pour les éléments
  getAnimationDelay(index: number): string {
    return `${index * 0.1}s`;
  }
}