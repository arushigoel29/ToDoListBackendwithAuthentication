const bodyParser = require("body-parser");
const express=require("express");
const mongoose =require("mongoose");
const loginRoute=require("./routes/loginRoute")
const taskRoutes=require("./routes/taskRoutes")
const app=express();
const PORT=3000;
app.use(bodyParser.json())
//database connection
mongoose.connect("mongodb://localhost/myToDo_db")
const db=mongoose.connection;
db.on("error",()=>{
    console.log("error in connecting to db");
});
db.once("open",()=>{
    console.log("successfull connection");
})
//routes
app.use('/api/auth',loginRoute)

app.use('/api/task',taskRoutes)
//Port started
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
});
