import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCCCL0vWpvGJXzoqbC_sUdBkS1QakqMMCw',
  authDomain: 'metz-74fb9.firebaseapp.com',
  projectId: 'metz-74fb',
  storageBucket: 'metz-74fb9.appspot.com',
  messagingSenderId: '254669563783',
  appId: '1:254669563783:web:21d2797092d64b3723952',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
