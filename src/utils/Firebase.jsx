// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
  } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc,collection,writeBatch,query,getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBN2e24zmu66n0XcntPHNzRLrcDxhVnNp4",
  authDomain: "disney-clone-fa324.firebaseapp.com",
  projectId: "disney-clone-fa324",
  storageBucket: "disney-clone-fa324.appspot.com",
  messagingSenderId: "269955926927",
  appId: "1:269955926927:web:3986c2783058f40f8059fa",
  measurementId: "G-KLE9VX9PD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth();
export const storage = getStorage();
export default db;
export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);

  export const onAuthStateChangedListiners =(callBack)=>{
    onAuthStateChanged(auth,callBack)
  }
  export const signOutOfAuth =async()=>await signOut(auth)
  export const addCollectionAndDocuments=async(collectionKey,objectsToAdd)=>{
    const collectionRef = collection(db,collectionKey);
    const batch = writeBatch(db)
  
    Object.keys(objectsToAdd).forEach((object)=>{
      const docRef =doc(collectionRef,object);
      batch.set(docRef,objectsToAdd[object]);
    });
    await batch.commit();
    console.log("done");
  }
  // export const getCollectionAndDocuments = async()=>{
  //   const collectionRef = collection(db,"movies");
  //   const q = query(collectionRef);
  //   const querySnapshot = await getDocs(q);
  //   const categoryMap= querySnapshot.docs.map((docSnapshot)=>{
  //     switch (docSnapshot.data().type){
  //       case ""
  //     }
  //     acc[title.toLowerCase()]=items;
  //     return acc
  //   },{});
  //   return categoryMap
  // }