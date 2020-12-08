import firebase from 'firebase';
require('@firebase/firestore');
// var firebaseConfig = {
//   apiKey: "AIzaSyDeJ8ZS3PnqbT8jkTa4g--w1EYaCJJ4gLc",
//   authDomain: "hihihihihi-3a4bb.firebaseapp.com",
//   databaseURL: "https://hihihihihi-3a4bb.firebaseio.com",
//   projectId: "hihihihihi-3a4bb",
//   storageBucket: "hihihihihi-3a4bb.appspot.com",
//   messagingSenderId: "685342487422",
//   appId: "1:685342487422:web:d62eb153f174c247d6b92f"
// };
var firebaseConfig = { apiKey: "AIzaSyBIxYOye6fslWL1dHfZWRGU2IHm--O-Gww", authDomain: "expo-a8dea.firebaseapp.com", databaseURL: "https://expo-a8dea.firebaseio.com", projectId: "expo-a8dea", storageBucket: "expo-a8dea.appspot.com", messagingSenderId: "389608467500", appId: "1:389608467500:web:1502d08267134e83d27589", measurementId: "G-LPSJ04FP42" };
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();