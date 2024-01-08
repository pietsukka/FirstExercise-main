


// Action Button

document.getElementById("actionButton").addEventListener("click", function() {
   
// Calling the toggle effect
    ToggleDescription();

    alert("Button clicked!");
});

// Datetime
document.getElementById("currentYear").innerText = new Date().getFullYear();



 // Toggle function 

function ToggleDescription() {
    var paragraph = document.getElementById("description");
    paragraph.style.display = (paragraph.style.display === "none" || paragraph.style.display === "") ? "block" : "none";
}