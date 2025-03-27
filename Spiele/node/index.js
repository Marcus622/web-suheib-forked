const os = require('os') // importiere uns os
// import os from "os"  // Diese ES6_Module Schreibweise nur möglich wenn in der package.json das Attribut "type":"modul" hinterlegt ist

console.log(os.version())
console.log(os.uptime())


const fs = require("fs")

fs.writeFile("message.txt","Hallo ich komme aus der index.js", (err) => {
    if (err) throw err;
    console.log("Die Datei wurde gespeichert.")
})