// Function to format the date as "Day Month Date, Year"
function formatDate(date) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
  
    return `${day} ${month} ${dayOfMonth}, ${year}`;
  }
  
  // Get the current date
  const currentDate = new Date();
  
  // Format the current date
  const formattedDate = formatDate(currentDate);
  
  // Update the HTML element with the formatted date
  document.getElementById("current-date").textContent = formattedDate;