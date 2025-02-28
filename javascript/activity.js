// Get the necessary elements
const completeButtons = document.querySelectorAll('.btn.bg-primary');
const activityLog = document.querySelector('.box-border');
const clearHistoryBtn = document.querySelector('.btn.bg-primary');
const date = new Date();

// Function to update the activity log
function updateActivityLog(taskTitle) {
  const taskTime = date.toLocaleString(); // Get current date and time
  const logMessage = `You have completed the task: "${taskTitle}" on ${taskTime}`;

  // Create a new list item for each log
  const logItem = document.createElement('li');
  logItem.textContent = logMessage;
  
  // Check if an activity list exists, if not, create it
  let activityList = document.querySelector('.activity-list');
  if (!activityList) {
    activityList = document.createElement('ul');
    activityList.classList.add('activity-list'); // Add a class for styling
    activityLog.appendChild(activityList);
  }
  
  activityList.appendChild(logItem);
}

// Function to disable the "Completed" button and show alert
function disableCompleteButton(button, taskTitle) {
  button.disabled = true;
  alert(`You have completed the task: "${taskTitle}"`);
}

// Add event listeners to each "Completed" button
completeButtons.forEach((button, index) => {
  const taskTitle = document.querySelectorAll('.card-title')[index].textContent; // Get task title from the card

  button.addEventListener('click', () => {
    // Disable the button
    disableCompleteButton(button, taskTitle);

    // Update the activity log
    updateActivityLog(taskTitle);
  });
});

// Add event listener to the "Clear History" button
clearHistoryBtn.addEventListener('click', () => {
  // Clear the activity log
  const activityList = document.querySelector('.activity-list');
  if (activityList) {
    activityList.innerHTML = ''; // Clear the activity list
    alert('Activity history has been cleared.');
  }
});
