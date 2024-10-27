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


/*------- "+" BUTTON FOR THIRD CONTAINER for the booking table --------*/

// NEW: Function to add an empty row above the '+' button
function addEmptyRow() {
    const bookingTable = document.getElementById("bookingTable").getElementsByTagName('tbody')[0];

    // Create new row and cells
    const newRow = document.createElement("tr");

    // NEW: Name cell with input field
    const nameCell = document.createElement("td");
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Enter name";
    nameCell.appendChild(nameInput);

    // NEW: Day cell with dropdown
    const dayCell = document.createElement("td");
    const daySelect = document.createElement("select");
    daySelect.className = "select-dropdown";
    ["Saturday", "Sunday"].forEach(day => {
        const option = document.createElement("option");
        option.value = day;
        option.text = day;
        daySelect.appendChild(option);
    });
    dayCell.appendChild(daySelect);

    // NEW: Time cell with dropdown
    const timeCell = document.createElement("td");
    const timeSelect = document.createElement("select");
    timeSelect.className = "select-dropdown";
    ["8-9", "9-10", "10-11", "11-12"].forEach(time => {
        const option = document.createElement("option");
        option.value = time;
        option.text = time;
        timeSelect.appendChild(option);
    });
    timeCell.appendChild(timeSelect);

    // NEW: Action cell with remove button
    const actionCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.onclick = function() {
        bookingTable.removeChild(newRow);
    };
    actionCell.appendChild(removeButton);

    // Append cells to row
    newRow.appendChild(nameCell);
    newRow.appendChild(dayCell);
    newRow.appendChild(timeCell);
    newRow.appendChild(actionCell);

    // Insert the new row above the '+' button row
    const addButtonRow = bookingTable.lastElementChild;
    bookingTable.insertBefore(newRow, addButtonRow);
}

// Add this in `script.js`
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".add-button").addEventListener("click", addEmptyRow);
});
