
import express from "express"

import mongoose from "mongoose"

import cors from "cors"

import formSchemas from './Models/form.model.js'
import cookieParser from "cookie-parser"


// App config
const app = express()

const port = process.env.PORT||5000

//Middlewares

app.use(express.json())
app.use(cors())
app.use(cookieParser())

//Google Auth

const {OAuth2Client} = require('google-auth-library')
CLIENT_ID = ''//paste client id here
const client = new OAuth2Client(CLIENT_ID)


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


app.post('/login',(req,res)=>{
    token = req.body.token
    console.log(token)
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        })
        const payload = ticket.getPayload()
        const userid = payload['sub']
        // If request specified a G Suite domain:
        // const domain = payload['hd'];
      }
      verify()
      .then(()=>{
          res.cookie('session-token', token)
          res.send('success')
      })
      .catch(console.error)
})

app.get('/profile',checkAuthenticated,(req,res)=>{
    user = req.user
    res.render('',{user}) //add the profile page
})

app.get('/logout',(req,res)=>{
    res.clearCookie('session-token')
    res.redirect('/')  //add the redirect url here
})

function checkAuthenticated(req,res,next){
    token = req.cookies('session-token')
    user = {}
    async function verify(){
        const ticket = await client.verifyIdToken({
            idToken:token,
            audience: CLIENT_ID
        })
        const payload = ticket.getPayload()
        user.name = payload.name
        user.email = payload.email
        user.picture = payload.picture
    }
    verify()
    .then(()=>{
        req.user = user
        next()
    })
    .catch(err=>{
        res.redirect('/login') //redirect routine
    })
}


//Listeners

app.listen(port,()=>{
    console.log('The server has started')
})

         







