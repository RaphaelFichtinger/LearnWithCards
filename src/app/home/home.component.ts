import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { UpdateFormComponent } from '../update-form/update-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  CardComponent,
  UpdateFormComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
