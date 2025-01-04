import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC_1RvBlYFVfPRzV9ujv6tKiquYcktCOG4",
  authDomain: "ai-job-tools.firebaseapp.com",
  projectId: "ai-job-tools",
  storageBucket: "ai-job-tools.firebasestorage.app",
  messagingSenderId: "570189665075",
  appId: "1:570189665075:web:27a4d52baa4618b5f4e446",
  measurementId: "G-6VEL9V4YHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };