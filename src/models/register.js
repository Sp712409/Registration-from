const mongoose = require("mongoose");
const validator = require("validator");

const userSchema= new mongoose.Schema({
    fullname:{
        type:String,
        require:[true, 'user FullName required'],
        trim:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }
    },
    mobile:{
        type:String,
        require:[true, 'user phone number required'],
        unique:true,
        validate:{
            validator:function(value){
                return /^[0-9]{10}$/.test(value);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    password:{
        type:String,
        require:true
    },
    confirmpassword:{
        type:String,
        require:true
    },
    
    
   
});




// create Collection 

const Register= new mongoose.model("Register",userSchema);

module.exports = Register;
