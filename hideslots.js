// 55555555555555555555555
// Select the emoji element by its ID (use 'emoji' or similar instead of the emoji itself as the ID)
const emojiElement = document.getElementById('emoji-btn');

// 55555555555555555555555
// Select Saturday and Sunday elements
const saturdayBtn = document.getElementById('saturday-btn');
const sundayBtn = document.getElementById('sunday-btn');
const saturdayContent = document.getElementById('saturday-content');
const sundayContent = document.getElementById('sunday-content');
const timeSlotsContainer = document.getElementById('time-slots-container');
const dynamicTableContainer = document.getElementById('dynamic-table-container');
const slotsContainer = document.getElementById('slots-container');
const coachesZone = document.querySelector('.coaches-zone');

// 55555555555555555555555
// Function to hide or show Saturday and Sunday-related elements
function hideWeekendSlots() {
    // List of elements to toggle visibility
    const elements = [
        saturdayBtn,
        sundayBtn,
        saturdayContent,
        sundayContent,
        timeSlotsContainer,
        dynamicTableContainer,
        slotsContainer, // Ensuring slot booking system is hidden
    ];

    // Toggle 'hidden' class on each element
    elements.forEach((el) => {
        if (el) {
            el.classList.add('hidden'); // Ensure 'hidden' is defined in your CSS
        }
    });

    // Show the coaches-only zone container after emoji click
    if (coachesZone) {
        coachesZone.classList.remove('hidden');
    }
}

// 55555555555555555555555
// Ensure that Saturday and Sunday elements are visible on page load
const showWeekendElements = [
    saturdayBtn,
    sundayBtn,
    saturdayContent,
    sundayContent,
];

// Ensure that Saturday and Sunday elements are visible on page load
showWeekendElements.forEach((el) => {
    if (el) {
        el.classList.remove('hidden');
    }
});

// Add event listener to the emoji for click events
if (emojiElement) {
    emojiElement.addEventListener('click', hideWeekendSlots);
}

// Add event listeners to Saturday and Sunday buttons for toggling their content visibility
if (saturdayBtn) {
    saturdayBtn.addEventListener('click', () => {
        saturdayContent.classList.toggle('hidden');
    });
}

if (sundayBtn) {
    sundayBtn.addEventListener('click', () => {
        sundayContent.classList.toggle('hidden');
    });
}

// Firebase configuration and Firestore setup
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js';

// Initialize Firestore
const db = getFirestore();

// Function to handle booking slots
const bookSlot = async (timeSlot) => {
    try {
        const docRef = await addDoc(collection(db, 'slots'), {
            time: timeSlot,
            booked: true
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

// Example of how to call this function
const bookingButton = document.getElementById('book-slot-btn');
if (bookingButton) {
    bookingButton.addEventListener('click', () => {
        const selectedTimeSlot = '12:00 PM'; // Replace this with actual time selection logic
        bookSlot(selectedTimeSlot);
    });
}
