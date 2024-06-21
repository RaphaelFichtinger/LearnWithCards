import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardserviceService } from '../cardservice.service';
import { Card } from '../card.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    RouterLinkActive

  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {


currentIndex:number = 0;
isQuestionVisible: any|boolean = true;
backgroundColor: string;
deleteMessage:string = "";
isFlipping: boolean = false;


constructor(public CardService: CardserviceService) { 
  this.backgroundColor = this.getRandomPastelColor();
}

getCardsFromService(): Card[]{
  return this.CardService.cards;
}

deleteCard() {
  const currentCard = this.CardService.cards[this.currentIndex];
  if (currentCard && currentCard.id) {
    this.CardService.delete("cards", currentCard.id);
    this.showDeleteMessage();
  }
  if (this.CardService.cards.length > 1) {
    this.currentIndex = this.currentIndex === this.CardService.cards.length - 1 ? 0 : this.currentIndex;
  } else {
    this.currentIndex = 0;
  }
}


toggle() {
    if (!this.isFlipping) {
        this.isFlipping = true;
        setTimeout(() => {
            this.isQuestionVisible = !this.isQuestionVisible;
        }, 100); 
        setTimeout(() => {
            this.isFlipping = false;
        }, 200); 
    }
}

nextCard(){
  if (this.currentIndex < this.CardService.cards.length-1) {
    this.currentIndex++;
    this.isQuestionVisible = true;
    this.setBackgroundColor();
  } else 
      this.currentIndex = 0;
      this.setBackgroundColor();
}

prevCard() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  } else {
    this.currentIndex = this.CardService.cards.length - 1;
  }
  this.isQuestionVisible = true;
  this.setBackgroundColor();
}

setBackgroundColor() {
  this.backgroundColor = this.getRandomPastelColor();
}

getRandomPastelColor(): string {
  const r = Math.floor((Math.random() * 127) + 127);
  const g = Math.floor((Math.random() * 127) + 127);
  const b = Math.floor((Math.random() * 127) + 127);
  return `rgb(${r}, ${g}, ${b})`;
}

showDeleteMessage() {
  this.deleteMessage = 'Karte gelöscht';
  setTimeout(() => {
    this.deleteMessage = ''; 
  }, 1000);
}

}
