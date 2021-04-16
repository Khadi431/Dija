const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/connectDB");
const traineesRoute =require("./routes/traineesRoute")
const usersRoute = require("./routes/usersRoute")

dotenv.config()

const app = express()
//connection
connectDB();


//middlewares
app.use(express.json())
app.use(morgan("dev"))

//routes
app.use('/api/v6/trainees',traineesRoute)
app.use("/api/v6/users", usersRoute)


//Home routes
app.get("/",(res, req)=>{
    res.send("<h1>Welcome trainees<h1>");
})
 
const port =process.env.PORT ||6000;

app.listen(port,()=>{
    console.log (`server start on port ${port}`)

} )