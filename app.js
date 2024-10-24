
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZ2BEsDvVRv9GIoNyA1wkIW4FqpTTcuxA",
    authDomain: "archer-slot-booking.firebaseapp.com",
    projectId: "archer-slot-booking",
    storageBucket: "archer-slot-booking.appspot.com",
    messagingSenderId: "96539149968",
    appId: "1:96539149968:web:23d9987e0a0cf2e1137a15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Bow and arrow emoji button
const emojiBtn = document.getElementById('emoji-btn');
const bookingTableContainer = document.getElementById('booking-table-container');
const containerSaturday = document.getElementById('container-saturday');
const containerSunday = document.getElementById('container-sunday');
const coachesZone = document.getElementById('coaches-zone');
const backBtn = document.getElementById('back-btn');

// When emoji is clicked, show Coaches Only Zone
emojiBtn.addEventListener('click', () => {
    containerSaturday.style.display = 'none'; // Hide Saturday container
    containerSunday.style.display = 'none'; // Hide Sunday container
    bookingTableContainer.style.display = 'none'; // Hide booking table container
    coachesZone.classList.remove('hidden'); // Show Coaches Only Zone
});

// When back button is clicked, go back to the main content
backBtn.addEventListener('click', () => {
    containerSaturday.style.display = 'block'; // Show Saturday container
    containerSunday.style.display = 'block'; // Show Sunday container
    bookingTableContainer.style.display = 'block'; // Show booking table container
    coachesZone.classList.add('hidden'); // Hide Coaches Only Zone
});
