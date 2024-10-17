// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";

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

// Get the form and available slots display
const bookingForm = document.getElementById('bookingForm');
const availableSlotsDiv = document.getElementById('availableSlots');

// Function to display available slots
async function displayAvailableSlots() {
    const slots = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM']; // Example slots
    availableSlotsDiv.innerHTML = ''; // Clear existing slots

    // Fetch booked slots from Firestore
    const bookedSlotsSnapshot = await getDocs(collection(db, 'bookedSlots'));
    const bookedSlots = bookedSlotsSnapshot.docs.map(doc => doc.data().time);

    // Display slots
    slots.forEach(slot => {
        const slotDiv = document.createElement('div');
        slotDiv.textContent = `${slot} - ${bookedSlots.includes(slot) ? 'Booked' : 'Available'}`;
        availableSlotsDiv.appendChild(slotDiv);
    });
}

// Handle form submission
bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const slot = document.getElementById('slot').value;
    const archerName = document.getElementById('archerName').value || "Anonymous";

    // Check if the slot is already booked
    const q = query(collection(db, 'bookedSlots'), where('time', '==', slot));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
        // Slot is available, so book it
        try {
            await addDoc(collection(db, 'bookedSlots'), {
                time: slot,
                archerName: archerName
            });
            alert('Slot booked successfully!');
            displayAvailableSlots();  // Update the slot list
        } catch (err) {
            console.error('Error booking slot:', err);
            alert('Error: ' + err.message);
        }
    } else {
        alert('This slot is already booked!');
    }
});

// Initial display of available slots
displayAvailableSlots();
