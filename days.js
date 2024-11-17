// Select Buttons
const saturdayBtn = document.getElementById('saturday-btn');
const sundayBtn = document.getElementById('sunday-btn');

// Select Content Sections
const saturdayContent = document.getElementById('saturday-content');
const sundayContent = document.getElementById('sunday-content');

// NEW CODE: Select Time Slots Container
const timeSlotsContainer = document.getElementById('time-slots-container');

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
    // Activate Saturday Button
    saturdayBtn.classList.add('active');
    sundayBtn.classList.remove('active');

    // Show Saturday Content
    saturdayContent.classList.remove('hidden');
    sundayContent.classList.add('hidden');

    // Show Time Slots
    showTimeSlots();
});

sundayBtn.addEventListener('click', () => {
    // Activate Sunday Button
    sundayBtn.classList.add('active');
    saturdayBtn.classList.remove('active');

    // Show Sunday Content
    sundayContent.classList.remove('hidden');
    saturdayContent.classList.add('hidden');

    // Show Time Slots
    showTimeSlots();
});

// Hide Time Slots on Page Load
hideTimeSlots();

//  Add Event Listeners for Time Slot Buttons
document.querySelectorAll('.time-slot-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        //  Removed the alert and call the function to create the booking slots
        const day = document.querySelector('.day-btn.active').textContent; // Get active day
        const time = btn.textContent; // Get time slot text
        createBookingSlots(day, time); // Generate booking slots dynamically
    });
});

//-----------------------------------------------------------------------------------

// Select dynamic table container
const dynamicTableContainer = document.getElementById('dynamic-table-container');
const tableTitle = document.getElementById('table-title');
const slotsContainer = document.querySelector('.slots-container');

//  Function to Create Booking Slots
function createBookingSlots(day, time) {
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
        // Determine the day based on active button
        const day = document.querySelector('.day-btn.active').textContent;

        // Get the time from the button's text
        const time = btn.textContent;

        // Create and display the booking slots
        createBookingSlots(day, time);
    });
});
