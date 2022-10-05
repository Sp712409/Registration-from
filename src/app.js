const express =require("express");

require("./db/conn");
const app = express();
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello Word")
});

app.listen(port,()=>{
    console.log(`the server is running port no ${port}`);
});
