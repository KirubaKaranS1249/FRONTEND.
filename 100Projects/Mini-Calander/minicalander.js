const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const todayBtn = document.getElementById("today-btn");

let currentDate = new Date(); // Start with today’s date

// Function to update the calendar display
function updateCalendar(date) {
  monthNameEl.innerText = date.toLocaleString("en", { month: "long" });
  dayNameEl.innerText = date.toLocaleString("en", { weekday: "long" });
  dayNumEl.innerText = date.getDate();
  yearEl.innerText = date.getFullYear();
}

// Initial update
updateCalendar(currentDate);

// Event listeners for previous and next buttons
prevBtn.addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() - 1); // Move to the previous day
  updateCalendar(currentDate); // Update the calendar display
});

nextBtn.addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
  updateCalendar(currentDate); // Update the calendar display
});

// Event listener for 'Today' button
todayBtn.addEventListener("click", () => {
  currentDate = new Date(); // Reset to today’s date
  updateCalendar(currentDate); // Update the calendar display
});
