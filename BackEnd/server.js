
import express from "express"

import mongoose from "mongoose"

import cors from "cors"

import formSchemas from './Models/form.model.js'


// App config
const app = express()

const port = process.env.PORT||5000

//Middlewares

app.use(express.json())
app.use(cors())

//DB config

const uri = "mongodb://admin:admin123@cluster0-shard-00-00.yrhj5.mongodb.net:27017,cluster0-shard-00-01.yrhj5.mongodb.net:27017,cluster0-shard-00-02.yrhj5.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-14bl78-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect(uri,{ 
    
})


app.post('/submit',(req,res) => {
    const formDb=req.body
    formSchemas.create(formDb, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

//API Endpoints

app.get("/",(req,res)=>{
    res.status(200).send("This is Working..")
})

app.get('/add',(req,res)=>{
    formSchemas.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

//Listeners

app.listen(port,()=>{
    console.log('The server has started')
})

         







