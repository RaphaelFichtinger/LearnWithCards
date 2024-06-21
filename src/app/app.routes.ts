import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { AddCardComponent } from './add-card/add-card.component';
import { UpdateFormComponent } from './update-form/update-form.component';

export const routes: Routes = [
    { path: '', component: StartscreenComponent },
    { path: 'home', component: HomeComponent },
    { path: 'addCard', component: AddCardComponent },
    { path: 'home/update/:id', component: UpdateFormComponent },


];
