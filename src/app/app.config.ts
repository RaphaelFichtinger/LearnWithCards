import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"learncards-176d8","appId":"1:530625941581:web:404b756c80b1f5d3010c04","storageBucket":"learncards-176d8.appspot.com","apiKey":"AIzaSyChqmcajqgqk6JvFuHCIdh9PIiEWN59woE","authDomain":"learncards-176d8.firebaseapp.com","messagingSenderId":"530625941581"})), provideFirestore(() => getFirestore())]
};
