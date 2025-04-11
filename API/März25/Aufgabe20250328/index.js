const cors = require("cors");
const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5500"
}))

function readFile() {
    const data = fs.readFileSync("filme.json", "utf-8");
    return JSON.parse(data);
}

function writeFile(data) {
    fs.writeFileSync("filme.json", JSON.stringify(data, null, 2));
}

app.get("/filme", (req, res) => {
    try {
        const filme = readFile();
        res.json(filme);
    } catch (err) {
        res.status(500).json({ error: `Internal Server Error: ${err}` });
    }

});

app.post("/filme", (req, res) => {
    try {
        const filme = readFile();
        const { title, year } = req.body

        //  Daten validieren, bevor ein neuer Film angelegt wird.

        if (!(title && year)) {
            return res.status(400).json({ error: "Titel und Jahr sind Pflichtfelder" });
        }

        const nameTaken = filme.find((film) => film.title == title && film.year == year);
        if (nameTaken) {
            return res.status(400).json({ error: "Es gibt bereits einen Film mit diesem Namen und Jahr." });
        }
        if (title.length < 3) {
            return res.status(400).json({ error: "Name muss mindestens drei Buchstaben enthalten!" });
        }
        const newFilm = {
            id: filme.length > 0 ? Math.max(...filme.map(f => f.id)) + 1 : 1,
            title: title,
            year: year
        }
        filme.push(newFilm)
        writeFile(filme)
        res.status(201).json(newFilm)

    } catch (err) {
        res.status(500).json({ error: "Internal Server error!" })
    }
})


app.put("/filme/:id", (req, res) => {
    try {
        const id = req.params.id;
        const filme = readFile(); // Datei aufrufen
        const newYear = req.body.year

        const foundFilm = filme.find(film => film.id == id)
        foundFilm.year = newYear
        res.json(foundFilm)
        writeFile(filme) // in Datei reinschreiben
    } catch (err) {
        res.status(500).json({ error: "Internal Server error!" })
    }
})

app.delete("/filme/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id, 10); // Ist id eine Zahl?
        if (isNaN(id)) {
            return res.status(400).json({ error: "ID muss eine Zahl sein!" })
        }
        const filme = readFile();
        const index = filme.findIndex(film => film.id === id)
        if (index === -1) {
            return res.status(404).json({ error: "Film existiert nicht!" })
        }
        const entfernterFilm = filme.splice(index, 1)
        writeFile(filme)
        res.json("Erfolgreich gelöscht: " + entfernterFilm[0].title)
    } catch (err) {
        res.status(500).json({ error: "Internal Server error!" })
    }
})

app.get("/filme/search", (req, res) => {
    try {
        const { id, title, year } = req.query;
        let filme = readFile();


        if (id) {
            const idNumber = parseInt(id, 10);
            if (!isNaN(idNumber)) {
                filme = filme.filter((film) => film.id === idNumber);
            }
        }

        if (title) {
            filme = filme.filter((film) => film.title.toLowerCase().includes(title.toLowerCase())
            );
        }

        if (year) {
            const yearNumber = parseInt(year, 10);
            if (!isNaN(yearNumber)) {
                filme = filme.filter((film) => film.year === yearNumber);

            }
        }
        res.json(filme);
    }catch (err) {
        res.status(500).json({error: `Internal Serverfehler: ${err.message}`});
    }
    });

app.listen(5005);