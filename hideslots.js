// Select the emoji element by its ID
const emojiElement = document.getElementById('emoji-btn');

// Select Saturday and Sunday elements
const saturdayBtn = document.getElementById('saturday-btn');
const sundayBtn = document.getElementById('sunday-btn');
const saturdayContent = document.getElementById('saturday-content');
const sundayContent = document.getElementById('sunday-content');
const timeSlotsContainer = document.getElementById('time-slots-container');
const dynamicTableContainer = document.getElementById('dynamic-table-container');
const coachesZone = document.getElementById('coaches-zone');

// Function to hide or show Saturday and Sunday-related elements
function hideWeekendSlots() {
    const elementsToHide = [
        saturdayBtn,
        sundayBtn,
        saturdayContent,
        sundayContent,
        timeSlotsContainer,
        dynamicTableContainer,
    ];

    elementsToHide.forEach((el) => {
        if (el) el.classList.add('hidden'); // Add hidden class to hide elements
    });

    if (coachesZone) coachesZone.classList.remove('hidden'); // Show Coaches Only Zone
}

// Ensure that Saturday and Sunday elements are visible on page load
const showWeekendElements = [saturdayBtn, sundayBtn, saturdayContent, sundayContent];
showWeekendElements.forEach((el) => {
    if (el) el.classList.remove('hidden'); // Make sure they are shown initially
});

// Add event listener to the emoji for click events
if (emojiElement) {
    emojiElement.addEventListener('click', hideWeekendSlots);
}

// Add event listeners to toggle visibility for each day's content
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
