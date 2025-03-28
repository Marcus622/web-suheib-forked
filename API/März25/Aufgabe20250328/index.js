const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

function readFile() {
    const data = fs.readFileSync("filme.json", "utf-8");
    return JSON.parse(data);
}

function writeFile(data) {
    fs.writeFileSync("filme.json", JSON.stringify(data, null, 2));
}

app.get("/filme", (req, res) => {
    const filme = readFile();
    res.json(filme);
});

app.post("/filme", (req, res) => {
    const filme = readFile();
    const { Title, Year } = req.body



    if (Title && Year) {
        const newFilm = {
            id: filme.length + 1,
            Title: Title,
            Year: Year
        }
        filme.push(newFilm)
        writeFile(filme)
        res.status(201).json(newFilm)
    }
    else {
        res.send("Daten unvollständig")
    }
});


app.put("/filme/:id", (req, res) => {
    const id = req.params.id;
    const filme = readFile(); // Datei aufrufen
    const newArt = req.body.art

    const foundFilm = filme.find(film => film.id == id)
    foundFilm.art = newArt
    res.json(foundFilm)
    writeFile(filme) // in Datei reinschreiben

});

app.listen(5005);