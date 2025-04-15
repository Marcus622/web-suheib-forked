
const buttonShowAnimals = document.getElementById("button_show_animals")
const showAnimals = document.getElementById("show_animals")
const addTierForm = document.getElementById("addTierForm")
const showAddAnimalForm = document.getElementById("showAddAnimalForm")
const content = document.getElementById("content")

// #####################################################################################

// Button um das Formular anzuzeigen

showAddAnimalForm.addEventListener("click", () => {
    addTierForm.hidden = false;
    content.hidden = true;
})

// ######################################################################################

// Alle Tiere anzeigen lassen

buttonShowAnimals.addEventListener("click", async () => {
    const res = await fetch("http://127.0.0.1:3000/tiere")
   displayData(await res.json())

    function displayData(data) {
        console.log(data)
        showAnimals.innerHTML = "";

        // Wir starten eine Schleife für jeden Eintrag aus der Datenbank
        data.forEach(tier => {
            console.log(tier)

            // Erst wird das Zeilenelement für die Tabelle erstellt
            const row = document.createElement("tr");

            const tierart = document.createElement("td")
            tierart.textContent = tier.tierart;
            row.appendChild(tierart);

            const name = document.createElement("td")
            name.textContent = tier.name;
            row.appendChild(name);

            const krankheit = document.createElement("td")
            tierart.textContent = tier.krankheit;
            row.appendChild(krankheit);

            const alter = document.createElement("td")
            alter.textContent = tier.age;
            row.appendChild(alter);

            const gewicht = document.createElement("td")
            gewicht.textContent = tier.gewicht;
            row.appendChild(gewicht);

            const deleteButtonFeld = document.createElement("td");

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Löschen"
            deleteButton.addEventListener("click", () => deleteAnimal(tier.id))

            deleteButtonFeld.appendChild(deleteButton)
            row.appendChild(deleteButtonFeld);

            showAnimals.appendChild(row);


        });
    }
});

// #################################################################################################

// Formular auslesen und POST senden

addTierForm.addEventListener("submit", async (event) => {
    event.preventDefault()

    // Alle Inputfelder auslesen und ein Objekt erstellen

    const newAnimal = {};
    const inputs = addTierForm.querySelectorAll("input[name]")
    inputs.forEach((input) => {
        newAnimal[input.name] = input.value
    })

    await fetch("http://localhost:3000/tiere", {
        method: "POST",
        headers: { "Conten-Type": "application/json", },
        body: JSON.stringify(newAnimal)
    });

    addTierForm.requestFullscreen();
    buttonShowAnimals.click()
    addTierForm.hidden = true;
    content.hidden = false;
})

// ###########################################################################

// löschfunktion

async function deleteAnimal(id) {
    await fetch (`http://127.0.0.1:3000/tiere/${id}`, {
        method: "DELETE"
});
buttonShowAnimals.click();
}
