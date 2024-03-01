const express = require("express");
const parser = require("body-parser");

const app = express();
app.use(parser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/BMI_generator.html");
})

app.post("/BMI_generator.html", (req, res)=>{
    let height = req.body.height;
    let weight = req.body.weight;
    let result = (weight/((height*height)/10000)).toFixed(2);
    res.send(`your bmi is: ${result}`);
});

app.listen(3000, ()=>{
    console.log("server has started at 3000");
})