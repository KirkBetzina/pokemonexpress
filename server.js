require('dotenv').config()
// import express
const express = require('express')
// instantiate a new app
const app = express()
// configure the port
const PORT = process.env.PORT
//import pokemon model
const pokemon = require('./models/pokemon')


//MIDDLEWARE
//request => middlewares(MORGAN) => responses 
const logger = require('morgan')
app.use(logger('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// add a default route
app.get('/', (req, res) => {
    res.json({
        status: 200,
        msg: 'hitting the default route'
    })
})

//import our controllers
const pokemonController = require('./controllers/pokemon')
app.use('/pokemon', pokemonController)



app.listen(PORT, () => {
    console.log(`listening in on port ${PORT}`)
})