import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";
    
// Firebase Config
const firebaseConfig = {
apiKey: "AIzaSyDYymYZFqhXG6U5weoSltXIwJfinvBAQsc",
authDomain: "qroll-9eefa.firebaseapp.com",
databaseURL: "https://qroll-9eefa-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "qroll-9eefa",
storageBucket: "qroll-9eefa.appspot.com",
messagingSenderId: "199837968072",
appId: "1:199837968072:web:78e7dae9cf3d5a62e1a7fd"
};
    
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Form 
const db = getDatabase(app);
set(ref(db, 'prod/nav/' + new Date().getTime(),), {
    useragent: navigator.userAgent,
    epoch: new Date().getTime(),
    date: new Date().toUTCString(),
    page: "/r"
})
.then(() => {
    console.log(db, 'prod/form/' + document.getElementById('code').value + '/')
    document.getElementById('QRForm').addEventListener('submit', function(e) {
        disablebtn()
        e.preventDefault();
        set(ref(db, 'prod/form/' + document.getElementById('code').value + '/' + new Date().getTime()), {
            QRoll_id: document.getElementById('code').value,
            location: document.getElementById('subject').value,
            epoch: new Date().getTime(),
            date: new Date().toUTCString(),
            useragent: navigator.userAgent
        })
        .then(() => {
            document.getElementById('QRForm').reset();
            location.href='/QRoll/r/thx'
        })
        .catch((error) => {
            location.href='/QRoll/r/error'
        });
    });
})
.catch((error) => {
    location.href='/QRoll/r/error'
});