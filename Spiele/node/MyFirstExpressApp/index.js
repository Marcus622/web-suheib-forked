const express = require('express')
const app = express()

// CRUD
// C = Create -> Erstellen ->> Post
// R = Read -> Lesen ->> GET
// U = Update -> Daten updaten ->> PUT
// D = Delete -> Löschen ->> DELETE

// app.get("/", (req,res) => {
//     res.send(200)
// })
app.get("/people", (req,res) => {
    res.send(201)
})


app.listen(5006)