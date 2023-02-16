const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    Description:{
        type:String
    },
    date:{
        type:Date
    },
    time:{
        type:String
    },
 
    St:{
        type:String
    },

})
const user=mongoose.model("Students",userSchema);
module.exports=user;