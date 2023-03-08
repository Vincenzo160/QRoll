const firebaseConfig = {
    apiKey: "AIzaSyDYymYZFqhXG6U5weoSltXIwJfinvBAQsc",
    authDomain: "qroll-9eefa.firebaseapp.com",
    databaseURL: "https://qroll-9eefa-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "qroll-9eefa",
    storageBucket: "qroll-9eefa.appspot.com",
    messagingSenderId: "199837968072",
    appId: "1:199837968072:web:78e7dae9cf3d5a62e1a7fd"
  };

firebase.initializeApp(firebaseConfig);

var QRollDB = firebase.database().ref('QRoll')

document.getElementById('QRForm').addEventListener('submit', submitForm)

function submitForm(e){
    e.preventDefault();

    var qrid = getElementVal('code');
    var loc = getElementVal('subject');

    console.log(qrid, loc)
}

const getElementVal = (id) =>{
    return document.getElementById(id).value;
}