// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase configuration
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

// Select Elements
const saturdayBtn = document.getElementById('saturday-btn');
const sundayBtn = document.getElementById('sunday-btn');
const emojiBtn = document.getElementById('emoji-btn');
const saturdayContent = document.getElementById('saturday-content');
const sundayContent = document.getElementById('sunday-content');
const coachesZoneContainer = document.getElementById('coaches-zone-container');
const timeSlotsContainer = document.getElementById('time-slots-container');
const dynamicTableContainer = document.getElementById('dynamic-table-container');
const slotsContainer = document.querySelector('.slots-container');
const tableTitle = document.getElementById('table-title');

// Track whether emoji is clicked
let emojiClicked = false;

// Toggle the emoji button functionality
emojiBtn.addEventListener('click', () => {
    emojiClicked = !emojiClicked;

    // Show/hide the coaches zone content based on emoji state
    if (emojiClicked) {
        coachesZoneContainer.classList.remove('hidden');
        saturdayContent.classList.add('hidden');
        sundayContent.classList.add('hidden');
        timeSlotsContainer.classList.add('hidden');
        dynamicTableContainer.classList.add('hidden');
    } else {
        coachesZoneContainer.classList.add('hidden');
    }
});

// Function to show time slots
function showTimeSlots() {
    timeSlotsContainer.classList.remove('hidden');
}

// Function to hide time slots
function hideTimeSlots() {
    timeSlotsContainer.classList.add('hidden');
}

// Saturday Button Event
saturdayBtn.addEventListener('click', () => {
    if (!emojiClicked) {
        saturdayBtn.classList.add('active');
        sundayBtn.classList.remove('active');
        saturdayContent.classList.remove('hidden');
        sundayContent.classList.add('hidden');
        showTimeSlots();
    }
});

// Sunday Button Event
sundayBtn.addEventListener('click', () => {
    if (!emojiClicked) {
        sundayBtn.classList.add('active');
        saturdayBtn.classList.remove('active');
        sundayContent.classList.remove('hidden');
        saturdayContent.classList.add('hidden');
        showTimeSlots();
    }
});

// Hide Time Slots Initially
hideTimeSlots();

// Function to Create Booking Slots
async function createBookingSlots(day, time) {
    tableTitle.textContent = `${day} ${time}`;
    slotsContainer.innerHTML = '';

    for (let i = 1; i <= 14; i++) {
        const slotBox = document.createElement('div');
        slotBox.className = 'slot-box';

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Enter name';

        const button = document.createElement('button');
        button.textContent = 'Book';

        button.addEventListener('click', async () => {
            const name = input.value.trim();
            if (name === '') {
                alert('Please enter a name to book the slot.');
                return;
            }

            slotBox.style.backgroundColor = 'green';
            slotBox.textContent = name;
            slotBox.style.fontSize = '1.2em';
            slotBox.style.color = 'white';

            try {
                await addDoc(collection(db, 'bookings'), { day, time, slot: i, name });
            } catch (error) {
                console.error('Error booking slot: ', error);
            }
        });

        slotBox.appendChild(input);
        slotBox.appendChild(button);
        slotsContainer.appendChild(slotBox);
    }

    dynamicTableContainer.classList.remove('hidden');
}

// Time Slot Button Event
document.querySelectorAll('.time-slot-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        const day = document.querySelector('.day-btn.active').textContent;
        const time = btn.textContent;
        createBookingSlots(day, time);
    });
});
