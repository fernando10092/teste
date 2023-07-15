const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req,res)=>res.render("ht"))

app.listen(3333, ()=>console.log("Servidor"));