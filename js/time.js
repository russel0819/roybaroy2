function updateClock() {
    // Get the current time
    const now = new Date();

    // Format the time as hh:mm:ss AM/PM
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (hours % 12) || 12; // Convert to 12-hour format

    // Format the date as Month Day, Year
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);

    // Display the date and time in the 'current-date-time' element
    const currentDateTimeElement = document.getElementById('current-date-time');
    currentDateTimeElement.textContent = `${formattedDate}, ${formattedHours}:${minutes}:${seconds} ${ampm}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the initial date and time
updateClock();
