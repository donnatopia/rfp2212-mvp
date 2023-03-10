import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import config from '../../config.js';

const app = initializeApp({
  apiKey: config.REACT_APP_FIREBASE_API,
  authDomain: config.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: config.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: config.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: config.REACT_APP_FIREBASE_APP_ID
});

export const auth = getAuth(app);
export default app;