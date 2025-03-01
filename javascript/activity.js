const completeButtons = document.querySelectorAll('.btn.bg-primary:not(#clear-history)'); 
const activityLog = document.querySelector('.activity-log-container'); 
const clearHistoryBtn = document.querySelector('#clear-history');

function updateActivityLog(taskTitle) {
  const taskTime = new Date().toLocaleString();
  const logMessage = `You have completed the task: "${taskTitle}" on ${taskTime}`;


  const logItem = document.createElement('div');
  logItem.classList.add('log-item'); 
  logItem.textContent = logMessage;

  activityLog.prepend(logItem);
}

function disableCompleteButton(button, taskTitle) {
  button.disabled = true;
  alert(`You have completed the task: "${taskTitle}"`);
}

completeButtons.forEach((button) => {
  const taskTitle = button.closest('.card').querySelector('.card-title').textContent;

  button.addEventListener('click', () => {
    disableCompleteButton(button, taskTitle);
    updateActivityLog(taskTitle);
  });
});

clearHistoryBtn.addEventListener('click', () => {
  activityLog.innerHTML = ''; 
  alert('Activity history has been cleared.');
});