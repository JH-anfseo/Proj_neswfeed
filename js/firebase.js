// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";

// 아래 데이터는 본인의 Firebase 프로젝트 설정에서 확인할 수 있습니다.
const firebaseConfig = {
  apiKey: "AIzaSyCmMyCh9YApD4l38_XCVwgHZDY6r8VQxmk",
  authDomain: "newsfeed-b24f2.firebaseapp.com",
  projectId: "newsfeed-b24f2",
  storageBucket: "newsfeed-b24f2.appspot.com",
  messagingSenderId: "886076778178",
  appId: "1:886076778178:web:21ffc37bd955a6f8037d5b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);
export const storageService = getStorage(app);
