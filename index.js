// const express = require("express");
// const mongoose = require("mongoose");
// const UserModel = require("./models/users");

// const app = express();
// app.use(express.json());

// mongoose.connect("mongodb://127.0.0.1:27017/crud");

// app.get("/", (req, res) => {
//   UserModel.find({})
//     .then((users) => res.json(users))
//     .catch((err) => res.json(err));
// });
// app.post("/UpdateUser/:id", (req, res) => {
//   const id = req.params.id;
//   UserModel.updateOne({ _id:id }, req.body, { new: true })
//     .then((users) => res.json(users))
//     .catch((err) => res.json(err));
// });
// app.get("/getuser/:id", (req, res) => {
//   const id = req.params.id;
//   UserModel.findOne({ _id: id })
//     .then((users) => res.json(users))
//     .catch((err) => res.json(err));
// });

// app.post("/createUser", (req, res) => {
//   UserModel.create(req.body)
//     .then((users) => res.json(users))
//     .catch((err) => res.json(err));
// });

// app.delete("/deleteUser/:id", (req, res) => {
//   const id = req.params.id;
//   UserModel.findByIdAndDelete({ _id: id })
//     .then(res => res.json(res))
//     .catch(err => res.json(err));
// });
// app.listen(3001, () => {
//   console.log("Server is Running");
// });


const express = require('express');
const cors = require("cors");


const app = express();
app.use(cors());

const connectDB = require("./db/connect")
const port = 5000;
app.use(express.json());

const product_routes = require("./routes/products" )

const start = async () =>{
  try {
    await connectDB();
    app.listen(port , ()=>{
      console.log(`${port} yes i am connected`)
    });
  }
  catch(error){
    console.log(error)
  }
}

start()

app.use("/api",product_routes)

app.get("/getData" ,(req,res)=>{
  // res.json({name:"hii"})
  res.send("hello")
})


