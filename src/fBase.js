/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

// 아래가 원래 파이어베이스 설정 부분
const firebaseConfig = {
  apiKey: 'AIzaSyCoWQuRbG6jpdq_abHg691E5wmCJZMPGIM',
  authDomain: 'twitterclone-b8f55.firebaseapp.com',
  projectId: 'twitterclone-b8f55',
  storageBucket: 'twitterclone-b8f55.appspot.com',
  messagingSenderId: '928438559845',
  appId: '1:928438559845:web:505d8ff57fa2d74f71128c',
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();

export const dbService = firebase.firestore();
