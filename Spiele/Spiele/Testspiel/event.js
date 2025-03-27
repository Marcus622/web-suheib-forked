
const button = document.getElementById("startbutton");
button.removeEventListener("click", spielStarten); // Vorhandenen Listener entfernen (Sicherheitsmaßnahme)
button.addEventListener("click", function () {
    spielStarten();
    button.style.display = "none"; // Button ausblenden
});


    
