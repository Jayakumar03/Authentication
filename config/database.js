const mongoose  = require("mongoose")
const {MONGODB_URL} = process.env


// Everybody can use this code repeat
exports.connect = () => {
    mongoose
    .connect(MONGODB_URL, {
     /* Mongodb is using new praser, In-order to make it backward compatable 
    " useNewUrlPraser: true"  is used */

    useNewUrlParser: true,
    useUnifiedTopology: true,
})
   .then(console.log(`DB connect Successfully`))

   .catch((err) => {
    console.log(`Database connection failed : ${err}`)
})
}
