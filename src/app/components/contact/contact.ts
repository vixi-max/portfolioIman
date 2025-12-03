import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  isMouseOver = false;
  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onMouseMove(event: MouseEvent) {
    const overlay = document.querySelector('.quantum-overlay') as HTMLElement;
    if (overlay) {
      const x = event.clientX;
      const y = event.clientY;
      overlay.style.setProperty('--x', `${x}px`);
      overlay.style.setProperty('--y', `${y}px`);
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    
    // Simulation d'envoi de formulaire
    console.log('Données du formulaire:', this.contactData);
    
    // Réinitialiser le formulaire après envoi
    this.contactData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    
    // Afficher un message de confirmation (à implémenter)
    alert('Votre message a été transmis avec succès à l\'univers quantique!');
  }
}