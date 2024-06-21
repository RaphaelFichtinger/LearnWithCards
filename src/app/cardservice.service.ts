import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, onSnapshot, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Card } from './card.interface';
import { Timestamp } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CardserviceService {

  firestore: Firestore = inject(Firestore);

  cards: Card[] = [];
  unsubList;

  constructor() {
    this.unsubList = this.subCards();
   }

   ngOnInit(){
   }

   subCards() {
    return onSnapshot(this.getCardsRef(), (list) => {
      this.cards = [];
      list.forEach(element => {
        this.cards.push(this.setCardObject(element.data(), element.id));
      });
  
      this.cards.sort((a, b) => {
        const aTime = a.createdAt ? a.createdAt.toMillis() : 0;
        const bTime = b.createdAt ? b.createdAt.toMillis() : 0;
        return aTime - bTime;
      });
    });
  }

   setCardObject(obj:any, id:string): Card{
    return { 
      id: id || "",
      type: obj.type || "card",
      question: obj.question || "",
      answer: obj.answer || "",
      createdAt: obj.createdAt || null 

    }
   }

  getCardsRef(){
    return collection(this.firestore, "cards");
  }

  getSingleCardRef(colId:string, docId:string){
    return doc(collection(this.firestore, colId), docId);
  }

  ngOnDestroy(){
    this.unsubList();
  }

  async addNew(item: Card){
    const cardWithTimestamp = {
      ...item,
      createdAt: Timestamp.now()
    };
  
    await addDoc(this.getCardsRef(), cardWithTimestamp).catch(
      (err) => { console.error(err) }
    ).then((docRef) => { console.log("Document written with ID", docRef) });
  }


  async update(colId:string, docId:string, item:{}){
    await updateDoc(this.getSingleCardRef(colId, docId), item);
  }

  async delete(colId:"cards", docId:string){
    await deleteDoc(this.getSingleCardRef(colId, docId))
  }

}
