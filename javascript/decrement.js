
document.addEventListener('DOMContentLoaded', () => {
  
  const completeButtons = document.querySelectorAll('.btn.bg-primary:not(#clear-history)');

  
  const totalTaskElement = document.getElementById('task-number'); 
  const completedTaskElement = document.getElementById('cheak-box'); 

  function decrementCounts() {
   
    let totalTaskCount = parseInt(totalTaskElement.textContent);
    if (totalTaskCount > 0) {
      totalTaskCount--;
      totalTaskElement.textContent = totalTaskCount;
    }

   
    let completedTaskCount = parseInt(completedTaskElement.textContent);
    if (completedTaskCount > 0) {
      completedTaskCount--;
      completedTaskElement.textContent = completedTaskCount;
    }
  }

 
  completeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      decrementCounts(); 
    });
  });
});