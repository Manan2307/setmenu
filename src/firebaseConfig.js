import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getAnalytics } from "firebase/analytics";

const app = firebase.initializeApp({
	apiKey: "AIzaSyB-HuMpggeqx23pF6zCLiYoJO-BjEqS9H8",
	authDomain: "setmenu-a5d55.firebaseapp.com",
	databaseURL: 'https://setmenu-a5d55-default-rtdb.asia-southeast1.firebasedatabase.app/',
	projectId: "setmenu-a5d55",
	storageBucket: "setmenu-a5d55.appspot.com",
	messagingSenderId: "6192868695",
	appId: "1:6192868695:web:1bfeb5970bec220d526212",
	measurementId: "G-TQFQ701RMX"
})

export const database = app.firestore()
const analytics = getAnalytics(app);

export default app
