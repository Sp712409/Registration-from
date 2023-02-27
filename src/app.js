const express =require("express");
require("./db/conn");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const hbs = require("hbs");
const Register = require("./models/register");



app.use(express.json());
app.use(express.urlencoded({extended:false}));




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
    res.render("register")
});




// use post request 
app.post("/register",async(req,res)=>{
    try {
          const password = req.body.password;
          const confirmpassword = req.body.password;
          if(password===confirmpassword){
            const userdata = new Register({
                fullname:req.body.fullname,
                email:req.body.email,
                mobile:req.body.mobile,
                password:req.body.password,
                confirmpassword:req.body.confirmpassword
            });
            
            const savedata = await userdata.save();
            res.status(201).send("Thank You Messages");
          }
    } catch (error) {
        res.status(400).send(error)
        
    }
});




app.listen(port,()=>{
    console.log(`the server is running port no ${port}`);
});
