const express=require("express");
const app=express();
const userdata = require("./model")
const mongoose=require("mongoose");
const bodyParser = require("body-parser");
const cors=require('cors')
const port=4000;
//use cors
app.use(cors())
app.use(bodyParser.json())
//for connecting the database
mongoose.connect('mongodb://127.0.0.1:27017/techlift', {
    useNewUrlParser: true
})
mongoose.connection.once('open',()=>{
    console.log(" DB connected")
})
app.get('/show',function(req,res){
    res.send("hi how are you")
})
//add data in database
app.post('/create',( req , res ) =>{
    let user = userdata(req.body)
    user.save()
    .then((used)=>{
        res.send(used)

    }).catch((err)=>{
        console.log("api failed")
    })
});
app.delete("/delete/:id",(req,res)=>{
    const id=req.params.id;
    userdata.findByIdAndDelete(id,(err,used)=>{
        if(!err){
            res.status(200).json(used);
        }
        else{
            console.log("filed to delete")
        }
    })
})
//edit and update
// Update Data from database through ID

// app.put("/edit/:id", async (req, res) => {
// 	const post = await userdata.findByIdAndUpdate(req.params.id, {
// 		$set: req.body,
// 	});
// 	res.send(post);
// });
//me eidt code
// app.put("/edit/:id", (req, res) => {
//     let id = req.params.id;
//     userdata.updateOne({ _id: id }, { $set: req.body }, (err) => {
//       if (err) {
//         console.log("error occured while updating data");
//       } else {
//         res.send(console.log("updated successfully"));
//       }
//     });
//   });
//now edit
  app.put("/update/:id", (req, res) => {
    userdata.updateOne(
      { _id: req.params.id },
      {
        name: req.body.name,
        Description: req.body.Description,
        date: req.body.date,
        // date: req.body.date,
        time: req.body.time,
         St: req.body.St,
        
      },
      (err) => {
        if (err) {
          res.send(err);
        } else {
          res.send("Updated Successfully");
        }
      }
    );
  });
  //now above edit
//edit and update
app.listen(port,()=>{
    console.log("port is connected")
})

// app.get('/show',function(req,res){
//     res.send(console.log("hi how are you"))
// })
//appi show
app.get('/get',async(req,res)=>{
    const dataget=await userdata.find();
    res.send(dataget);
})