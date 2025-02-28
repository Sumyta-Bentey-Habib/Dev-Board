
document.addEventListener("DOMContentLoaded", function () {
    
    const themeButton = document.getElementById("theme-btn");

   
    if (themeButton) {
        themeButton.addEventListener("click", function () {
           
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            
           
            document.body.style.backgroundColor = randomColor;
        });
    } else {
        console.error("Theme button not found!");
    }
});
