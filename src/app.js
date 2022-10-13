const express =require("express");
require("./db/conn");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const hbs = require("hbs");

//serving public file
const public_path = path.join(__dirname,"../public");
app.use(express.static(public_path));

//serving dynamic file
const dynamic_path = path.join(__dirname,"../templates/views");
app.set("view engine","hbs");
app.set("views", dynamic_path);


//serving dynamic file
const partials_path = path.join(__dirname,"../templates/partials");
hbs.registerPartials(partials_path)



app.get("/",(req,res)=>{
    res.render("home")
});
app.get("/about",(req,res)=>{
    res.render("about")
});
app.get("/contact",(req,res)=>{
    res.render("contact")
});
app.get("/register",(req,res)=>{
    res.render("register")
});
app.get("/secret",(req,res)=>{
    res.render("secret")
});


app.listen(port,()=>{
    console.log(`the server is running port no ${port}`);
});
