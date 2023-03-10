const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

require('dotenv').config()
const app = express()

const PORT = process.env.PORT || 5050;

app.use(express.json())
app.use(cookieParser())
app.use(cors())

const start = async() => {
    try{
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }) 
        app.listen(PORT, ()=>{
            console.log(`listening on port ${PORT}`)
        })
    } catch(e){

    }
}

start()