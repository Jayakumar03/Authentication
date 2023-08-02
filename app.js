const express = require("express")

const app = express();



app.get("/", (req, res) => {
    res.send("Hello form port : 3000")



})


module.exports  = app
// Exporting the app to index.js file to use it there