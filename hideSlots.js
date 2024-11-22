// Select the emoji element by its ID (use 'emoji' or similar instead of the emoji itself as the ID)
const emojiElement = document.getElementById('emoji-btn');

// Select Saturday and Sunday elements
const saturdayBtn = document.getElementById('saturday-btn');
const sundayBtn = document.getElementById('sunday-btn');
const saturdayContent = document.getElementById('saturday-content');
const sundayContent = document.getElementById('sunday-content');
const timeSlotsContainer = document.getElementById('time-slots-container');
const dynamicTableContainer = document.getElementById('dynamic-table-container');

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
    ];

    // Toggle 'hidden' class on each element
    elements.forEach((el) => {
        if (el) {
            el.classList.toggle('hidden'); // Ensure 'hidden' is defined in your CSS
        }
    });
}

// Show Saturday and Sunday buttons and content by default
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
