const express = require("express")
const mongoose = require("mongoose")
const route = require('../src/routes/route');
const app =express();

app.use(express.json());
mongoose.set('strictQuery', false);


let url = "mongodb+srv://Mohammadvaseem099:uDNTAkafkNrYLe0C@cluster0.2npclft.mongodb.net/Mohammadvaseem099"
let port = process.env.PORT || 3000;

mongoose.connect(url, {useNewUrlParser: true})
.then(()=> console.log("MongoDB is connected...."))
.catch(err => console.log(err));

app.use("/", route);

app.listen(port, ()=>{
    console.log("Express app is running on port " +port);
})