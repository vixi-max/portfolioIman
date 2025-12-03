import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects implements OnInit {
  isMouseOver = false;
  activeFilter = 'all';

  ngOnInit() {
    this.setupFiltering();
  }

  onMouseMove(event: MouseEvent) {
    const overlay = document.querySelector('.quantum-overlay') as HTMLElement;
    if (overlay) {
      const x = event.clientX;
      const y = event.clientY;
      overlay.style.setProperty('--x', `${x}px`);
      overlay.style.setProperty('--y', `${y}px`);
    }
  }

  setupFiltering() {
    // Cette fonction serait appelée après le rendu pour configurer le filtrage
    setTimeout(() => {
      const filterButtons = document.querySelectorAll('.filter-btn');
      const projectCards = document.querySelectorAll('.quantum-project-card');

      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Retirer la classe active de tous les boutons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          
          // Ajouter la classe active au bouton cliqué
          button.classList.add('active');
          
          // Récupérer la valeur du filtre
          const filterValue = button.getAttribute('data-filter');
          this.activeFilter = filterValue || 'all';
          
          // Filtrer les projets
          this.filterProjects(this.activeFilter);
        });
      });
    }, 0);
  }

  filterProjects(filter: string) {
    const projectCards = document.querySelectorAll('.quantum-project-card');
    
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      
      if (filter === 'all' || category === filter) {
        (card as HTMLElement).style.display = 'block';
        setTimeout(() => {
          (card as HTMLElement).style.opacity = '1';
          (card as HTMLElement).style.transform = 'translateY(0)';
        }, 50);
      } else {
        (card as HTMLElement).style.opacity = '0';
        (card as HTMLElement).style.transform = 'translateY(20px)';
        setTimeout(() => {
          (card as HTMLElement).style.display = 'none';
        }, 300);
      }
    });
  }

  // Simulation de données de projets
  projects = [
    {
      title: "Quantum E-Commerce Platform",
      category: "web",
      description: "A high-performance e-commerce solution built with Angular and Node.js...",
      technologies: ["Angular", "Node.js", "MongoDB", "AWS"]
    },
    {
      title: "Predictive Maintenance AI",
      category: "ai", 
      description: "Machine learning system that predicts equipment failures with 95% accuracy...",
      technologies: ["Python", "TensorFlow", "IoT Sensors", "Cloud ML"]
    }
    // Ajouter d'autres projets ici...
  ];
}