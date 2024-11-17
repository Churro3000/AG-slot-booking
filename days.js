// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZ2BEsDvVRv9GIoNyA1wkIW4FqpTTcuxA",
    authDomain: "archer-slot-booking.firebaseapp.com",
    projectId: "archer-slot-booking",
    storageBucket: "archer-slot-booking",
    messagingSenderId: "96539149968",
    appId: "1:96539149968:web:23d9987e0a0cf2e1137a15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Select Buttons
const saturdayBtn = document.getElementById('saturday-btn');
const sundayBtn = document.getElementById('sunday-btn');

// Select Content Sections
const saturdayContent = document.getElementById('saturday-content');
const sundayContent = document.getElementById('sunday-content');

// Select Time Slots Container
const timeSlotsContainer = document.getElementById('time-slots-container');
const dynamicTableContainer = document.getElementById('dynamic-table-container');
const tableTitle = document.getElementById('table-title');
const slotsContainer = document.querySelector('.slots-container');

// Function to Show Time Slots
function showTimeSlots() {
    timeSlotsContainer.classList.remove('hidden');
}

// Function to Hide Time Slots
function hideTimeSlots() {
    timeSlotsContainer.classList.add('hidden');
}

// Add Event Listeners for Buttons
saturdayBtn.addEventListener('click', () => {
    saturdayBtn.classList.add('active');
    sundayBtn.classList.remove('active');
    saturdayContent.classList.remove('hidden');
    sundayContent.classList.add('hidden');
    showTimeSlots();
});

sundayBtn.addEventListener('click', () => {
    sundayBtn.classList.add('active');
    saturdayBtn.classList.remove('active');
    sundayContent.classList.remove('hidden');
    saturdayContent.classList.add('hidden');
    showTimeSlots();
});

// Hide Time Slots on Page Load
hideTimeSlots();

// Function to Create Booking Slots
async function createBookingSlots(day, time) {
    // Set the title
    tableTitle.textContent = `${day} ${time}`;

    // Clear previous slots
    slotsContainer.innerHTML = '';

    // Create 14 slots
    for (let i = 1; i <= 14; i++) {
        const slotBox = document.createElement('div');
        slotBox.className = 'slot-box';

        // Create input field
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Enter name';

        // Create booking button
        const button = document.createElement('button');
        button.textContent = 'Book';

        // Add booking functionality
        button.addEventListener('click', async () => {
            const name = input.value.trim();

            if (name === '') {
                alert('Please enter a name to book the slot.');
                return;
            }

            // Mark slot as booked
            slotBox.style.backgroundColor = 'green';
            slotBox.textContent = name;
            slotBox.style.fontSize = '1.2em';
            slotBox.style.color = 'white';

            // Save booking to Firebase
            try {
                await addDoc(collection(db, 'bookings'), {
                    day,
                    time,
                    slot: i,
                    name,
                });
                console.log(`Slot ${i} booked successfully.`);
            } catch (error) {
                console.error('Error booking slot: ', error);
            }
        });

        // Add input and button to the slot box
        slotBox.appendChild(input);
        slotBox.appendChild(button);

        // Add slot box to the slots container
        slotsContainer.appendChild(slotBox);
    }

    // Show the dynamic table container
    dynamicTableContainer.classList.remove('hidden');
}

// Add Event Listeners for Time Slot Buttons
document.querySelectorAll('.time-slot-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        const day = document.querySelector('.day-btn.active').textContent;
        const time = btn.textContent;
        createBookingSlots(day, time);
    });
});
