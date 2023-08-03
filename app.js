require("dotenv").config()

const express = require("express")

const app = express();



app.get("/", (req, res) => {
    res.send("Hello form server")



})


module.exports  = app
// Exporting the app to index.js file to use it there