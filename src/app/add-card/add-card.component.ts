import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardserviceService } from '../cardservice.service';
import { Card } from '../card.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, } from '@angular/router';


@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.scss'
})
export class AddCardComponent {

  question:string = '';
  answer:string = '';
  successMessage:string = '';

  constructor(public cardService: CardserviceService, private router: Router) {}

  addCard(){
    if (this.question.trim() && this.answer.trim()) {
    let card: Card = {
      type: "card",
      question:this.question,
      answer:this.answer,
    };
    this.cardService.addNew(card);
    this.success();
    this.question = '';
    this.answer = '';
  } else {
   this.required();
  }
}


  success() {
    this.successMessage = 'Karte hinzugefügt';
    setTimeout(() => {
      this.successMessage = ''; 
    }, 1000);
  }

  required() {
    this.successMessage = 'Beide Felder ausfüllen';
    setTimeout(() => {
      this.successMessage = ''; 
    }, 1000);
  }
  }
