const completeButtons = document.querySelectorAll('.btn.bg-primary:not(#clear-history)'); 
const activityLog = document.querySelector('.box-border'); 
const clearHistoryBtn = document.querySelector('#clear-history');
const date = new Date();

function updateActivityLog(taskTitle) {
  const taskTime = date.toLocaleString();
  const logMessage = `You have completed the task: "${taskTitle}" on ${taskTime}`;

  const logItem = document.createElement('li');
  logItem.textContent = logMessage;


  let activityList = activityLog.querySelector('.activity-list');
  if (!activityList) {
    activityList = document.createElement('ul');
    activityList.classList.add('activity-list');
    activityLog.appendChild(activityList); 
  }

  activityList.appendChild(logItem); 
}

function disableCompleteButton(button, taskTitle) {
  button.disabled = true;
  alert(`You have completed the task: "${taskTitle}"`);
}

completeButtons.forEach((button, index) => {
  const taskTitle = document.querySelectorAll('.card-title')[index].textContent;

  button.addEventListener('click', () => {
    disableCompleteButton(button, taskTitle);
    updateActivityLog(taskTitle);
  });
});

clearHistoryBtn.addEventListener('click', () => {
  const activityList = activityLog.querySelector('.activity-list'); 
  if (activityList) {
    activityList.innerHTML = ''; 
    alert('Activity history has been cleared.');
  }
});