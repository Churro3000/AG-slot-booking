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
const pageTitle = document.querySelector('.page-title'); // Select the page title
const manageTimeSlotsContainer = document.getElementById('manage-time-slots'); // Fourth container

// When emoji is clicked, show Coaches Only Zone
emojiBtn.addEventListener('click', () => {
    containerSaturday.style.display = 'none'; // Hide Saturday container
    containerSunday.style.display = 'none'; // Hide Sunday container
    bookingTableContainer.style.display = 'none'; // Hide booking table container
    coachesZone.classList.remove('hidden'); // Show Coaches Only Zone
    pageTitle.style.display = 'none'; // Hide the title
    manageTimeSlotsContainer.classList.remove('hidden'); // New Code: Show manage time slots container
});

// When back button is clicked, go back to the main content
backBtn.addEventListener('click', () => {
    containerSaturday.style.display = 'block'; // Show Saturday container
    containerSunday.style.display = 'block'; // Show Sunday container
    bookingTableContainer.style.display = 'block'; // Show booking table container
    coachesZone.classList.add('hidden'); // Hide Coaches Only Zone
    pageTitle.style.display = 'block'; // Show the title again
    manageTimeSlotsContainer.classList.add('hidden'); // New Code: Hide manage time slots container
});

// TICK-BOX Selecting the checkboxes for Saturday and Sunday
const saturdayCheckbox = document.getElementById('saturday');
const sundayCheckbox = document.getElementById('sunday');

// TICK-BOX Function to update Saturday checkbox based on time slots
function updateSaturdayCheckbox() {
    const timeSlots = [document.getElementById('time1'), document.getElementById('time2'), document.getElementById('time3'), document.getElementById('time4')];
    saturdayCheckbox.checked = timeSlots.some(checkbox => checkbox.checked);
}

// TICK-BOX Function to update Sunday checkbox based on time slots
function updateSundayCheckbox() {
    const timeSlots = [document.getElementById('time5'), document.getElementById('time6'), document.getElementById('time7'), document.getElementById('time8')];
    sundayCheckbox.checked = timeSlots.some(checkbox => checkbox.checked);
}

// TICK-BOX Adding event listeners to Saturday time slots
document.getElementById('time1').addEventListener('change', updateSaturdayCheckbox);
document.getElementById('time2').addEventListener('change', updateSaturdayCheckbox);
document.getElementById('time3').addEventListener('change', updateSaturdayCheckbox);
document.getElementById('time4').addEventListener('change', updateSaturdayCheckbox);

// TICK-BOX Adding event listeners to Sunday time slots
document.getElementById('time5').addEventListener('change', updateSundayCheckbox);
document.getElementById('time6').addEventListener('change', updateSundayCheckbox);
document.getElementById('time7').addEventListener('change', updateSundayCheckbox);
document.getElementById('time8').addEventListener('change', updateSundayCheckbox);

// TICK-BOX Function to untick all Saturday time slots
function untickSaturdayTimeSlots() {
    const timeSlots = [document.getElementById('time1'), document.getElementById('time2'), document.getElementById('time3'), document.getElementById('time4')];
    timeSlots.forEach(checkbox => {
        checkbox.checked = false; // Untick each checkbox
    });
}

// TICK-BOX Function to untick all Sunday time slots
function untickSundayTimeSlots() {
    const timeSlots = [document.getElementById('time5'), document.getElementById('time6'), document.getElementById('time7'), document.getElementById('time8')];
    timeSlots.forEach(checkbox => {
        checkbox.checked = false; // Untick each checkbox
    });
}

// TICK-BOX Adding event listeners to Saturday checkbox
saturdayCheckbox.addEventListener('change', function() {
    if (!saturdayCheckbox.checked) {
        untickSaturdayTimeSlots(); // Untick all time slots if Saturday checkbox is unticked
    }
});

// TICK-BOX Adding event listeners to Sunday checkbox
sundayCheckbox.addEventListener('change', function() {
    if (!sundayCheckbox.checked) {
        untickSundayTimeSlots(); // Untick all time slots if Sunday checkbox is unticked
    }
});
