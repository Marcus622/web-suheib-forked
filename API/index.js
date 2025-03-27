const express = require("express");
const app = express();
const axios = require("axios");

let generateName = require('sillyname');

app.get("/joke", async (req,res) => {
    try {
        const response = await axios.get("https://api.chucknorris.io/jokes/random");
        res.json({ joke: response.data.value});

    } catch (error) { 
        res.status(500).json({ error: "Fehler beim Abrufen des Witzes"});
    }
});


app.get("/",(req,res) => {
    res.send("Willkommen bei meiner eigenen API!");

});

app.get("/data",(req,res) => {
    res.json([
        {id:1,name: "Uwe"},
        {id:2,name:"Susi"}
    ]);
});

app.get("/randomname",(req,res) => {
    let sillyName = generateName();
    res.json(sillyName)
    
})

app.listen(3001, () => {
    console.log("Server läuft auf http://localhost:3001&quot;");
        
});
