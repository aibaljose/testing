import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

    const firebaseConfig = {
  apiKey: "AIzaSyDavd3AS7RrmxGvwje4A6sZyG8CVO118Y4",
  authDomain: "ting-67508.firebaseapp.com",
  projectId: "ting-67508",
  storageBucket: "ting-67508.firebasestorage.app",
  messagingSenderId: "533542097236",
  appId: "1:533542097236:web:8e3b5b76c54c4d323bb8c1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

(async () => {
  const params = new URLSearchParams(location.search);
  const data = Object.fromEntries(params.entries());
  if (Object.keys(data).length > 0) {
    await addDoc(collection(db, "urlData"), { ...data, timestamp: new Date() });
    console.log("Saved", data);
  }
})();
