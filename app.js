require("dotenv").config()
require("./config/database").connect()

const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const app = express();
app.use(express.json())

// Importing model \
const User = require("./model/user")



app.get("/", (req, res) => {
    res.send("Hello form server")
})


app.post("/register", async (req, res) => {
    try {
        // Getting value form frontend 
        const {
            firstName,
            lastname,
            email,
            password
        } = req.body

        // Checking the required fields valye are present or not
        if (!(firstName && lastname && email && password)) {
            res.status(400).send("All the required fileds are not present")
        }


        // Checking email is present in the existing database
        const existingUser = await User.findOne({
            email
        }) // This is promise


        // if it is present dispaly the below message
        if (existingUser) {
            res.status(401).send("User already existed")

        }

        // encrypting the password usaing bcryptjs
        /*
        1. bcrypt accepts two arguments 1. password to be encrypted 2. Number of encryption tobe done in password
        */
        const myEncPassword = await bcrypt.hash(password, 10)


        /*
        1. Creating new user in database form the detail obtained
        2. since database operation take more time and tahn exepected and they will always return promise
        3. If we are creating or saving new user in database, MongoDB will return object id
        4. That why we declaring an varaible to obtain it or else we can use the second type to create new user
        */
        // database opration =>  return promise
        const user = await User.create({
            firstName,
            lastname,
            email: email.toLowerCase(),
            password: myEncPassword

        })

        // or
        // promise alternative method 
        /* User.create({
            firstName, 
            lastname, 
            email: email.toLowerCase() ,
            passwaord :myEncPassword
    
        }).then().catch */


        /*
        creating an token via jwt. Jwt.sign method is used it accepts three arguements
        1. object to created token 
        2. Private key stored in .envfile
        3. Another object. Inside it specifi exparation time
        
        */
        const token = jwt.sign({
                user_id: user._id

            },
            process.env.SECRET_KEY, {

                expiresIn: "2h"
            })

        // Adding token to user
        user.token = token

        // updating db or not

        res.status(201).json(user)


    } catch (error) {
        console.log(error)

    }

})


module.exports = app
// Exporting the app to index.js file to use it there