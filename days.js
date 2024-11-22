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

// Export the Firebase app and Firestore instance
export { app, db };

// Select Buttons
const saturdayBtn = document.getElementById('saturday-btn');
const sundayBtn = document.getElementById('sunday-btn');
const emojiBtn = document.getElementById('emoji-btn'); // NNNNNEEWWW: Bow and arrow emoji button

// Select Content Sections
const saturdayContent = document.getElementById('saturday-content');
const sundayContent = document.getElementById('sunday-content');
const coachesZone = document.getElementById('coaches-zone'); // NNNNNEEWWW: Coaches Only Zone
const manageTimeSlots = document.getElementById('manage-time-slots'); // NNNNNEEWWW: Manage Time Slots container

// Select Time Slots Container
const timeSlotsContainer = document.getElementById('time-slots-container');
const dynamicTableContainer = document.getElementById('dynamic-table-container');
const tableTitle = document.getElementById('table-title');
const slotsContainer = document.querySelector('.slots-container');

// Function to Show Main Page and Hide Coaches Zone
function showMainPage() {
    coachesZone.classList.add('hidden'); // Hide Coaches Zone
    manageTimeSlots.classList.add('hidden'); // Hide time management slots
    saturdayContent.classList.remove('hidden'); // Show Saturday content
    sundayContent.classList.remove('hidden'); // Show Sunday content
    timeSlotsContainer.classList.remove('hidden'); // Show time slots container
    saturdayBtn.classList.remove('hidden'); // Show Saturday button
    sundayBtn.classList.remove('hidden'); // Show Sunday button
}

// Function to Show Coaches Zone and Hide Main Page
function showCoachesZone() {
    coachesZone.classList.remove('hidden'); // Show Coaches Zone
    manageTimeSlots.classList.remove('hidden'); // Show time management slots
    saturdayContent.classList.add('hidden'); // Hide Saturday content
    sundayContent.classList.add('hidden'); // Hide Sunday content
    timeSlotsContainer.classList.add('hidden'); // Hide time slots container
    saturdayBtn.classList.add('hidden'); // Hide Saturday button
    sundayBtn.classList.add('hidden'); // Hide Sunday button
}

// Add Event Listener for Emoji Button
emojiBtn.addEventListener('click', () => {
    if (coachesZone.classList.contains('hidden')) {
        showCoachesZone(); // Switch to Coaches Zone
    } else {
        showMainPage(); // Switch back to Main Page
    }
});

// Add Event Listeners for Buttons
saturdayBtn.addEventListener('click', () => {
    saturdayBtn.classList.add('active');
    sundayBtn.classList.remove('active');
    saturdayContent.classList.remove('hidden');
    sundayContent.classList.add('hidden');
    timeSlotsContainer.classList.remove('hidden');
});

sundayBtn.addEventListener('click', () => {
    sundayBtn.classList.add('active');
    saturdayBtn.classList.remove('active');
    sundayContent.classList.remove('hidden');
    saturdayContent.classList.add('hidden');
    timeSlotsContainer.classList.remove('hidden');
});

// Function to Hide Slots Initially
showMainPage(); // NNNNNEEWWW: Ensure Main Page is visible on page load


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








