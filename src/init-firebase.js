// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  query,
  getFirestore,
  getDocs,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_gEW3_aq7OeMjdlhrxVv-HqsmAdfXSOQ",
  authDomain: "darkhandeed-7d404.firebaseapp.com",
  projectId: "darkhandeed-7d404",
  storageBucket: "darkhandeed-7d404.appspot.com",
  messagingSenderId: "899169821128",
  appId: "1:899169821128:web:33ac19198b48478063e0fd",
  measurementId: "G-WR8C9B1LVP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
async function AddingData(data) {
  try {
    const docRef = await addDoc(collection(db, "users"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getSlideImages() {
  // Create a reference to the file whose metadata we want to retrieve
  const storage = getStorage();
  const images = [
    await getDownloadURL(ref(storage, "Slide/1.jpeg")),
    await getDownloadURL(ref(storage, "Slide/2.jpeg")),
    await getDownloadURL(ref(storage, "Slide/3.jpeg")),
  ];
  return images;
}
async function getAllNews() {
  // debugger;
  return await getDocs(query(collection(db, "news")));
}

export const functions = {
  AddingData,
  getSlideImages,
  getAllNews,
};
export default app;
