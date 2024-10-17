// Firebase configuration (replace this with your own config)
const firebaseConfig = {
  apiKey: "AIzaSyAZ2BEsDvVRv9GIoNyA1wkIW4FqpTTcuxA",
  authDomain: "archer-slot-booking.firebaseapp.com",
  projectId: "archer-slot-booking",
  storageBucket: "archer-slot-booking.appspot.com",
  messagingSenderId: "96539149968",
  appId: "1:96539149968:web:23d9987e0a0cf2e1137a15"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// References to the DOM elements
const bookingForm = document.getElementById('bookingForm');
const availableSlotsList = document.getElementById('availableSlots');

// Fetch available slots from Firestore and display them
function displayAvailableSlots() {
    availableSlotsList.innerHTML = '';  // Clear existing slots
    db.collection('bookedSlots').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            const slot = doc.data().time;
            const li = document.createElement('li');
            li.textContent = `Booked: ${slot}`;
            availableSlotsList.appendChild(li);
        });
    });
}

// Handle booking slot form submission
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const slot = document.getElementById('slot').value;
    const archerName = document.getElementById('archerName').value || "Anonymous";

    // Check if the slot is already booked
    db.collection('bookedSlots').where('time', '==', slot).get().then(snapshot => {
        if (snapshot.empty) {
            // Slot is available, so book it
            db.collection('bookedSlots').add({
                time: slot,
                archerName: archerName
            }).then(() => {
                alert('Slot booked successfully!');
                displayAvailableSlots();  // Update the slot list
            }).catch(err => {
                console.error('Error booking slot:', err);
            });
        } else {
            alert('This slot is already booked!');
        }
    });
});

// Display available slots on page load
displayAvailableSlots();

