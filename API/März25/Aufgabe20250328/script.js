const submitButton = document.getElementById("submitButton");
const nameInput = document.getElementById("title");
const artInput = document.getElementById("year");
const antwortFeld = document.getElementById("antwort");

submitButton.addEventListener("click", () => {
    try {
        const requestBody = {
            name: nameInput.value,
            art: artInput.value
        }

        fetch("http://localhost:5005/filme", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        })  .then(res => res.json())
            .then(data => {
                antwortFeld.innerText = JSON.stringify(data);
                console.log(data);
            })
    } catch (err) {
        console.log("fehler bei fetch: " + err)
    }
})

window.onload = () => {
    fetch("http://localhost:5005/filme")
        .then(res => res.json())
        .then(data => {
            antwortFeld.innerText = JSON.stringify(data);
        })
}