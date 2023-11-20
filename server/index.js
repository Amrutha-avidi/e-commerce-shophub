const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const register= require('./routes/register')
const login= require('./routes/login')



const app = express()
require("dotenv").config()

app.use(express.json())

app.use(cors({
    origin:'http://localhost:5173',
    methods:["GET","POST"]
}))

app.use('/api/register',register)
app.use('/api/login',login)


app.get('/',(req,res)=>{
    res.send('welcome')
})

const port = process.env.PORT || 3000
const uri = process.env.DB_URI


app.listen(port,console.log(`listening on ${port}`))

mongoose.connect(uri,{
    useNewUrlParser:true,
})
.then(()=>console.log('MongoDB connected successfully'))
.catch((err)=>console.log('mongodb connection failed',err.message))

