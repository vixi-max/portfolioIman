import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

interface RouteConfig {
  path: string;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  standalone:true,
  imports :[ CommonModule],
  styleUrls: ['./header.scss']
})
export class Header implements OnInit {
  @ViewChild('btnEffect') btnEffect!: ElementRef;
  
particles: any[] = [];
  orbits: any[] = [];
  quantumActive: boolean = false;
  
  routes: RouteConfig[] = [
 
    { path: 'about', name: 'À Propos' },
    {path:'hero',name:'hero'},
    { path: 'skills', name: 'Compétences' },
    { path: 'projects', name: 'Projets' },
    { path: 'contact', name: 'Contact' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.generateParticles(20);
    this.generateOrbits(3);
  }

  // Génération des particules quantiques
  generateParticles(count: number): void {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        size: Math.random() * 4 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        animationDelay: Math.random() * 8
      });
    }
  }

  // Génération des orbites quantiques
  generateOrbits(count: number): void {
    for (let i = 0; i < count; i++) {
      this.orbits.push({});
    }
  }

  // Obtenir le nom d'une route
  getRouteName(path: string): string {
    const route = this.routes.find(r => r.path === path);
    return route ? route.name : path;
  }

  // Vérifier si une route est active
  isActive(path: string): boolean {
    const currentPath = this.router.url.substring(1);
    return currentPath === path || (path === '' && currentPath === '');
  }

  // Navigation vers une route
  navigateTo(path: string): void {
    this.router.navigate([path === '' ? '/' : path]);
  }

  // Activer l'effet quantique au survol
  activateQuantumEffect(index: number, event: MouseEvent): void {
    this.quantumActive = true;
    
    const quantumState = document.querySelector('.quantum-state') as HTMLElement;
    if (quantumState) {
      quantumState.style.setProperty('--x', `${event.clientX}px`);
      quantumState.style.setProperty('--y', `${event.clientY}px`);
    }
  }

  // Désactiver l'effet quantique
  deactivateQuantumEffect(): void {
    this.quantumActive = false;
  }
}