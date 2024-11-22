// Select the emoji element
const emojiElement = document.getElementById('toggleEmoji'); // Replace 'toggleEmoji' with your emoji's actual ID or class

// Select Saturday and Sunday elements
const saturdayBtn = document.getElementById('saturday-btn');
const sundayBtn = document.getElementById('sunday-btn');
const saturdayContent = document.getElementById('saturday-content');
const sundayContent = document.getElementById('sunday-content');
const timeSlotsContainer = document.getElementById('time-slots-container');
const dynamicTableContainer = document.getElementById('dynamic-table-container');

// Function to hide Saturday and Sunday-related elements
function hideWeekendSlots() {
    // Toggle visibility of buttons and content
    const elements = [
        saturdayBtn,
        sundayBtn,
        saturdayContent,
        sundayContent,
        timeSlotsContainer,
        dynamicTableContainer,
    ];

    elements.forEach((el) => {
        if (el) {
            el.classList.toggle('hidden'); // Assume you have a 'hidden' CSS class
        }
    });
}

// Add an event listener to the emoji for click events
emojiElement.addEventListener('click', hideWeekendSlots);
