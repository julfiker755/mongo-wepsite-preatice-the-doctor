const express=require('express')
const app=express()
const cors=require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const Objectid=require('mongodb').ObjectId
const port=5001;
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Your Express server run Wepsite')
})

const uri = `mongodb+srv://${process.env.BD_User}:${process.env.BD_password}@cluster0.y8g1qyk.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const collection = client.db("genius-car-servies").collection("servies");
async function run(){
  try{
    app.get("/servies",async(req,res)=>{
      const query={}
      const cursor=collection.find(query)
      const result=await cursor.toArray()
      res.send(result)
    })
    // hot to load data
    app.get("/servies/:id",async(req,res)=>{
      const id=req.params.id
      const query={_id:ObjectId(id)}
      const result=await collection.findOne(query)
      res.send(result)
    })
    app.post("/servies",async(req,res)=>{
      const bodydata=req.body
      const result=await collection.insertOne(bodydata);
      res.send(result)
    })
    // delete data
    app.delete("/servies/:id",async(req,res)=>{
       const id=req.params.id
       const query={_id:ObjectId(id)}
       const result=await collection.deleteOne(query)
       res.send(result)

    })
  }finally{

  }
}
run().catch(console.dir)

app.listen(port,()=>{
    console.log('server run successfull')
})