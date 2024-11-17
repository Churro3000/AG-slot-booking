// Select Buttons
const saturdayBtn = document.getElementById('saturday-btn');
const sundayBtn = document.getElementById('sunday-btn');

// Select Content Sections
const saturdayContent = document.getElementById('saturday-content');
const sundayContent = document.getElementById('sunday-content');

// Add Event Listeners for Buttons
saturdayBtn.addEventListener('click', () => {
    // Activate Saturday Button
    saturdayBtn.classList.add('active');
    sundayBtn.classList.remove('active');

    // Show Saturday Content
    saturdayContent.classList.remove('hidden');
    sundayContent.classList.add('hidden');
});

sundayBtn.addEventListener('click', () => {
    // Activate Sunday Button
    sundayBtn.classList.add('active');
    saturdayBtn.classList.remove('active');

    // Show Sunday Content
    sundayContent.classList.remove('hidden');
    saturdayContent.classList.add('hidden');
});

