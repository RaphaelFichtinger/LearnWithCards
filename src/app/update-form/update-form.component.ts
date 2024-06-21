import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { CardserviceService } from '../cardservice.service';
import { Card } from '../card.interface';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FormsModule,
    CardComponent,
    CommonModule,
  ],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.scss'
})
export class UpdateFormComponent {
answer!: string;
question!: string;
cardId!: string; 
successMessage:string = "";



constructor(private route: ActivatedRoute, public cardService : CardserviceService, private router: Router){

}

ngOnInit() {
  this.route.params.subscribe(params => {
    this.cardId = params['id'];
    const card = this.cardService.cards.find(c => c.id === this.cardId);
    if (card) {
      this.answer = card.answer;
      this.question = card.question;
    }
  });
}

updateCard() {
  if (this.question.trim() && this.answer.trim()) {
  const updatedCard = {
    question: this.question,
    answer: this.answer
  };
  this.cardService.update('cards', this.cardId, updatedCard).then(() => {
    this.success();
  }).catch(error => {
    console.error('Error updating card: ', error);
  });
} else {
  this.required();
  }
}
success() {
  this.successMessage = 'Karte geändert';
  setTimeout(() => {
    this.successMessage = ''; 
    this.router.navigate(['home']); 
  }, 1000);
}

required() {
  this.successMessage = 'Bitte beide Felder ausfüllen';
  setTimeout(() => {
    this.successMessage = ''; 
  }, 1000);
}
}