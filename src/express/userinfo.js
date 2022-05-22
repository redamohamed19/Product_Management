const mongoose=require("mongoose")
const { stringify } = require("querystring")
const { boolean } = require("webidl-conversions")
const connect=()=>{
    return mongoose.connect("mongodb://localhost:27017/delivery")
}
const user=new mongoose.Schema({
 
    FirstName:{
        type:String,
        required:true,
      
    },
    SecondName:{
        type:String,
        required:true,
      
    },
    Email:{
        type:String,
        required:true,
        unique:true
      
    },
    PhoneNumber:{
        type:String,
        required:true,
        unique:true
      
    },
    Password:{
        type:String,
        required:true,
      
    },


},{timestamps:true})
const User=mongoose.model("user",user);

connect().then(async connection =>{
    const user=await User.create({ FirstName: 'Reda', SecondName: 'Sayah',Email: 'reda1998.rs@gmail.com', PhoneNumber: '+213780059126',Password: 'Azerty125' })


  
}).catch(e=>{console.error(e)})