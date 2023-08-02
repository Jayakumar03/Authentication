const app = require("./app")




app.listen(3000, () => console.log("Server is now running at port 3000"))


// app.listen(4000, () => {
//     // app is the application name
//     // listen is provide by express to listen to the port. It accept two parameters 1. port 2. callback function 
//     console.log(`Server is running at port : 4000`)
// })