require("dotenv").config()
require("./config/database").connect()

const express = require("express")
const bcrypt = require("bcryptjs")

const app = express();
app.use(express.json())

// Importing model \
const User = require("./model/user")



app.get("/", (req, res) => {
    res.send("Hello form server")
})


app.post("/register", async(req,res) => {
    // Getting value form frontend 
    const {firstName, lastname, email, password} = req.body

    // Checking the required fields valye are present or not
    if(!(firstName && lastname && email && password)){
        res.status(400).send("All the required fileds are not present")
    }


    // Checking email is present in the existing database
    const existingUser = await User.findOne({email}) // This is promise


    // if it is present dispaly the below message
    if(existingUser){
        res.status(401).send("User already existed")

    }

    const myEncPassword = await bcrypt.hash(password, 10)

    const user = await User.create({ // database opration =>  promise 
        firstName, 
        lastname, 
        email: email.toLowerCase() ,
        passwaord :myEncPassword

    })

    or
// promise alternative method 
    /* User.create({
        firstName, 
        lastname, 
        email: email.toLowerCase() ,
        passwaord :myEncPassword

    }).then().catch */


})


module.exports  = app
// Exporting the app to index.js file to use it there