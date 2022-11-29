import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getAnalytics } from "firebase/analytics";

const app = firebase.initializeApp({
	// apiKey: "AIzaSyDO_acQKwqxJ5HJX14QHuww6PNkDwcOgzE",
	// authDomain: "menu-5c80a.firebaseapp.com",
	// databaseURL: 'https://menu-5c80a-default-rtdb.asia-southeast1.firebasedatabase.app/',
	// projectId: "menu-5c80a",
	// storageBucket: "menu-5c80a.appspot.com",
	// messagingSenderId: "240988229304",
	// appId: "1:240988229304:web:e33f376ccbbe6276586e4d",
	// measurementId: "G-0LN1LGBF8N"

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
