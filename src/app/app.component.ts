import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { HomeComponent } from './home/home.component';
import { UpdateFormComponent } from './update-form/update-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    StartscreenComponent,
    HomeComponent,
    UpdateFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  inputValue: string = ''; 
  inputArray: string[] = [];


  counter= signal(0);

increment(){
  this.counter.set(this.counter() + 1);
  this.inputArray.push(this.inputValue);
  this.inputValue = ``;
  console.log(this.inputArray);
}



}