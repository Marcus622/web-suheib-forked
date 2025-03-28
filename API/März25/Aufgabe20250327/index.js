const express = require("express");
const app = express();


//CRUD
// C = Create -> Erstellen ->> Post
// R = Read -> Lesen ->> GET
// U = Update -> Daten updaten ->> PUT
// D = Delete -> Löschen ->> DELETE

app.get("/", (req, res) => {
    res.send("Willkommen auf der Seite unseres Tierversandhandels.");
});

app.get("/list", (req, res) => {
    res.send(pat);
});

app.get("/id/:id", (req, res) => {
    const id = req.params.id;
    const result = pat.filter((pat) => pat.id == id);
    // res.send("Du hast das Tier mit folgender ID gesuch: " + req.params.id);
    res.json(result);
});

app.get("/list/search", (req, res) => {
    const art = req.query.art;
    const result = pat.filter((pat) => pat.art == art);
    res.json(result);
});

app.get("/pat/rasse/search", (req, res) => {
    const rasse = req.query.rasse;
    const result = rasse.filter((pat) => pat.rasse == rasse);
    res.json(result);
});



const pat = [
    { id: 1, name: "Alf", art: "Kameleon", rasse: "Kamel", geschlecht: "divers", alter: "12 Jahre" },
    { id: 2, name: "Lilifee", art: "Leguan", rasse: "Lego", geschlecht: "transgender", alter: "27 Jahre" },
    { id: 3, name: "Pferdi", art: "Pferd", rasse: "Ackergaul", geschlecht: "Mänlich", alter: "5 Jahre" },
    { id: 4, name: "Fido", art: "Saurier", rasse: "T-Rex", geschlecht: "Weiblich", alter: "44 Jahre" },
];


app.listen(3002);