console.log("Erster Log");

let myName;
let alter; // Globale Variable für das Alter
function spielStarten() {

    console.log("Scheisse läuft: Spiel beginnt.");

    alert("Das Spiel beginnt.")
    myName = prompt("Wie heißt du, tapferer Held?");

    console.log("Eingabe Name");

    alert("Freut mich, dich kennenzulernen, " + myName + "!");
    let isEingabeKorrekt1 = false;
    while (!isEingabeKorrekt1) {
        alter = parseInt(prompt("Wie alt bist du?")); // Globale Variable ändern
        if (alter >= 90) {

            console.log("Zu alt, beendet.");

            alert("Willst Du nicht besser zurück in Mamas Bettchen, du alter Greis?");
        } else if (alter >= 18 && alter < 90) {

            console.log("Alter passt. schleife läuft");

            alert("Wohlan edler Knappe, dann tritt ein und rüste dich.");
            isEingabeKorrekt1 = true;
        } else {
            console.log("Zu jung, Schleife beendet");
            alert("Du bist noch zu jung. Trainiere weiter und kehre später zurück!");
        }
    }
    let isEingabeKorekt = false;
    while (!isEingabeKorekt) {
        let waffe = prompt("Wählst du das Schwert oder Magie?");
        if (waffe.toLowerCase() === "schwert") {
            console.log("Schwert ist wahr. Schleife läuft.");
            alert("Du schwingst dein Schwert und kämpfst tapfer!");
            isEingabeKorekt = true;
        } else if (waffe.toLowerCase() === "magie") {
            alert("Du wirkst einen mächtigen Zauber!");
            isEingabeKorekt = true;
        } else {
            alert("Wähle bitte eine der Waffen!");
        }
    }


    // Spiel nur fortsetzen, wenn der Spieler alt genug ist

    alert(myName + ", das Spiel beginnt!");
    alert("Vor dir steht eine alte, mit Runen bedeckte Tür.");
    alert("Eine Stimme ertönt: 'Ich öffne mich nur, wenn du mein Rätsel löst.'");
    alert("Rätsel: Ich bin nicht lebendig, aber ich wachse. Ich habe keine Lungen, aber ich brauche Luft. Ich habe keinen Mund, und dennoch verschlinge ich alles. Was bin ich?'");
    let isEingabeKorrekt = false;
    while (!isEingabeKorrekt) {

        console.log("Scheisse läuft: isEingabeKorrekt =", isEingabeKorekt);

        let antwort = prompt("Gib deine Antwort ein:");
        if (antwort !== null && antwort.toLowerCase() === "feuer") {
            isEingabeKorrekt = true;

            console.log("Richtige Antwort: Schleife wird beerdigt.");
            alert("Richtig! Das Rätsel ist gelöst.");
            
            let sound = new Audio("sounds/door.mp3");
            sound.volume = 0.5;
            sound.play();
            alert("Die Stimme sagt: 'Das ist richtig. Die Tür öffnet sich mit einem lauten Knarren.'");
            alert("Du betrittst die unerforschte Welt!");
            setTimeout(() => {
                let video = document.createElement("video");
                video.src = "Wood.mp4";
                video.autoplay = true;
                video.style.width = "100%";
                document.body.appendChild(video);
                video.muted = true;
                video.play();
            }, 100);
        } else {
            console.log("Falsche Antwort eingegeben. Schleife wird fortgesetzt.");

            alert("Falsch! Versuche es erneut.");
            let sound = new Audio("sounds/Lachen.mp3");
            sound.volume = 0.5;
            sound.play();
            alert("Die Stimme lacht: 'Falsch! Versuche es erneut, wenn du den Mut hast.'");
        }
    }
}