// importing the necessary modules
const express = require("express")
const mongoose = require("mongoose")

// initializing the app
const app = express()

// middlewares
app.use(express.json())

// database connectivity
mongoose.connect("mongodb://localhost:27017/students")
.then(() => console.log("Database is succesfully connected..."))
.catch(err => console.log(err))

// routes
app.use('/students',require("./routes/student"))


// starting the app
app.listen(5000,() => console.log("App has started and is running on port 5000"))