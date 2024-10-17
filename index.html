// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, doc, deleteDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

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
const bookingTableBody = document.querySelector('#bookingTable tbody');

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

// Create the table with 14 rows and empty time blocks
for (let i = 0; i < 14; i++) {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    const nameInput = document.createElement('input');
    nameCell.appendChild(nameInput);

    const nineToTenCell = document.createElement('td');
    nineToTenCell.classList.add('time-block');
    nineToTenCell.innerText = "Available";  // Always show as available

    const tenToElevenCell = document.createElement('td');
    tenToElevenCell.classList.add('time-block');
    tenToElevenCell.innerText = "Available";  // Always show as available

    const actionCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = "Delete";
    deleteBtn.style.display = 'none'; // Initially hidden
    actionCell.appendChild(deleteBtn);

    row.appendChild(nameCell);
    row.appendChild(nineToTenCell);
    row.appendChild(tenToElevenCell);
    row.appendChild(actionCell);
    bookingTableBody.appendChild(row);

    // Add click event to the time slots
    nineToTenCell.addEventListener('click', () => toggleSlot(nineToTenCell, i));
    tenToElevenCell.addEventListener('click', () => toggleSlot(tenToElevenCell, i));

    // Add event listener for name input changes
    nameInput.addEventListener('input', () => {
        if (nameInput.value !== "") {
            deleteBtn.style.display = 'block'; // Show delete button when name is entered
        } else {
            deleteBtn.style.display = 'none'; // Hide delete button when name is empty
        }
    });

    // Delete booking
    deleteBtn.addEventListener('click', () => {
        nameInput.value = "";
        nineToTenCell.classList.remove('green');
        nineToTenCell.innerText = "Available"; // Reset text to available
        tenToElevenCell.classList.remove('green');
        tenToElevenCell.innerText = "Available"; // Reset text to available
        deleteBtn.style.display = 'none';

        // Remove from Firestore
        deleteBooking(i);
    });
}

// Toggle booking slot
function toggleSlot(cell, rowIndex) {
    if (cell.classList.contains('green')) {
        cell.classList.remove('green');
        cell.innerText = "Available"; // Reset text to available
        // Update Firestore
        updateBooking(rowIndex, false);
    } else {
        cell.classList.add('green');
        cell.innerText = "Booked"; // Update text to booked
        // Update Firestore
        updateBooking(rowIndex, true);
    }
}

// Update booking in Firestore
async function updateBooking(rowIndex, isBooked) {
    const nameInput = bookingTableBody.children[rowIndex].querySelector('td input');
    const rowData = {
        name: nameInput.value,
        nineToTen: bookingTableBody.children[rowIndex].children[1].classList.contains('green'),
        tenToEleven: bookingTableBody.children[rowIndex].children[2].classList.contains('green')
    };

    // Save or update to Firestore
    const docRef = doc(db, 'bookedSlots', rowIndex.toString());
    await setDoc(docRef, rowData);
}

// Delete booking from Firestore
async function deleteBooking(docId) {
    const docRef = doc(db, 'bookedSlots', docId.toString());
    await deleteDoc(docRef);
}

// Load existing bookings from Firestore
async function loadBookings() {
    const snapshot = await getDocs(collection(db, "bookedSlots"));
    snapshot.forEach(doc => {
        const data = doc.data();
        const rowIndex = parseInt(doc.id); // Assuming the document ID corresponds to the row index
        const row = bookingTableBody.children[rowIndex];

        // Set name
        row.querySelector('td input').value = data.name;

        // Set time slots
        if (data.nineToTen) {
            row.children[1].classList.add('green');
            row.children[1].innerText = "Booked"; // Update text to booked
        }
        if (data.tenToEleven) {
            row.children[2].classList.add('green');
            row.children[2].innerText = "Booked"; // Update text to booked
        }

        // Show delete button if booked
        if (data.name) {
            row.querySelector('.delete-btn').style.display = 'block';
        }
    });
}

// Call loadBookings on page load
window.onload = async () => {
    await loadBookings();
    displayAvailableSlots(); // Initial display of available slots
};
