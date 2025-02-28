document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("theme-btn");

    if (!themeButton) {
        console.error("Theme button not found!");
        return;
    }

    themeButton.addEventListener("click", function () {
        let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

        if (randomColor.length !== 7) {
            randomColor = "#000000"; 
        }

        
        document.body.style.setProperty("background-color", randomColor, "important");

        console.log("Background color changed to:", randomColor);
    });
});
